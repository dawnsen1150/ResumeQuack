from fastapi import Depends, FastAPI, HTTPException
from langchain_groq import ChatGroq
from langchain_core.prompts.chat import ChatPromptTemplate
from pydantic import BaseModel
import json

app = FastAPI()

with open("config.json","r") as f:
    config=json.load(f)


llm_groq = ChatGroq(
    temperature=0,
    model="llama3-70b-8192",
    api_key=config['api'] 
)


@app.post("/resume_quack")
async def generate(text, requirements):

    # System Prompt
    system_message='''You are an AI resume builder. Your job is to modify a given resume based on the requirements given by the user. User will give you the resume and the requirements for a job in which he is interested. Your job is to read the resume and the requirements and modify the resume's text so that the job requirements are mentioned into the resume. If the current resume doesn't show something which is in the requirement, don't add that requirement. Your job is to change the existing text in a way so the the resume includes the requirement texts. When user don't meet a requirement. Don't add that into the resume. After completion of the modification, return the resume using the same format provided by the user.'''


    final_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_message),
            ("human", "This is the resume text {x} and this is the requirements {y}"),
        ]
    )
    chain=final_prompt | llm_groq
    try:
        result=chain.invoke({"x":text,"y":requirements})
        return result.content
    except:
        raise HTTPException(status_code=result.status_code, detail=f"Failed to Generate Result")


