from fastapi import Depends, FastAPI, HTTPException
from langchain_core.prompts.chat import ChatPromptTemplate
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain.output_parsers.json import SimpleJsonOutputParser

app = FastAPI()

llm_openai = ChatOpenAI(model="gpt-4o-mini",api_key='',temperature=0.8)

json_parser = SimpleJsonOutputParser()

@app.post("/resume_quack")
async def generate(text, requirements):

    # System Prompt
    system_message='''You are an AI resume editor who edits resumes based on job requirements. Your job is to edit a resume based on job requirements provided by the user. The user will give you a resume and the requirements for a job in which he is applying. Your final jon is to retrun the new edited resume to the user.To do that, You need to meet the instructions below  

    Instructions:
    - Change the sentences in the responsibilities to incorporate the sentences from the requirements as long as the candidate meets the requirements.
    - In the edited version, total number of reposnsibilities must be equal to the total number of responsibilities in original version.
    - Return your response in a json format. There must be 7 sections. They are personal_information, summary, work_experience, education, skills, others and modification. In work_experience section, make sure to add duration for each jobs and the roles.
    - The modification section will include all the changes done by you in the new resume from the old one. For each changes, you need to list 3 things.which job in a company you changed the sentence,What is the changed sentence and what was the original sentence.

    '''


    final_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_message),
            ("human", "This is the resume text {x} and this is the requirements {y}"),
        ]
    )
    chain=final_prompt | llm_openai | json_parser
    try:
        result=chain.invoke({"x":text,"y":requirements})
        return result
    except:
        raise HTTPException(status_code=result.status_code, detail=f"Failed to Generate Result")


