document.addEventListener("DOMContentLoaded", function () {
    const data = {'personal_information': [{'name': 'Dipta Banik',
        'address': '26, North University Place, Stillwater, OK 74075, USA',
        'phone': '+1 (405)-762-5207',
        'email': 'banikdipta2020@gmail.com',
        'linkedin': 'https://www.linkedin.com/in/diptabanik/',
        'github': 'https://github.com/codemaster6124060'}],
      'summary': [{'objective': 'I am a well-determined and career-oriented financial engineering graduate, who focuses on gathering both elementary ideas and sophisticated knowledge about the practical implications of finance. Using quantitative techniques, I can build tools and models to assist clients in pricing, hedging, and structuring securities, model market behavior, analyze large-scale market data, and design algorithms to trade equities, fixed income, and derivative instruments.'}],
      'work_experience': [{'company': 'Department of Finance, Oklahoma State University',
        'location': 'Stillwater, OK, USA',
        'role': 'Graduate Research Assistant/Teaching Assistant',
        'duration': 'August 2021 - present',
        'responsibilities': ['Supported professors in data collection for research, utilizing SQL and Python to drive impactful data science projects that tackle ambiguous problem spaces.',
         'Conducted data analysis using Python, applying complex modeling frameworks to practical business problems.',
         'Graded exam scripts and kept records, demonstrating efficient execution and clear communication.']},
       {'company': 'Sheltech Brokerage Limited',
        'location': 'Dhaka, Bangladesh',
        'role': 'Equity Research Analyst',
        'duration': 'Feb 2019 – Oct 2019',
        'responsibilities': ['Prepared budget reports and industry reports, synthesizing data learnings into compelling stories for external stakeholders.',
         'Conducted financial modeling for stocks selected by the portfolio management division, using practical expertise in applying complex modeling frameworks to practical business problems.',
         'Pitched stocks with high potential to asset management firms and foreign investors, demonstrating positive energy and continuous learning.']},
       {'company': 'UniCap Securities Limited',
        'location': 'Dhaka, Bangladesh',
        'role': 'Equity Research Analyst',
        'duration': 'Nov 2017 – Jan 2019',
        'responsibilities': ['Developed daily & weekly market research, monetary policy reports, mutual funds reviews, and budget reports, demonstrating clear communication and efficient execution.',
         'Conducted stock valuation with fundamental analysis tools (i.e., FCFF and FCFE) and prepared equity research reports, applying complex modeling frameworks to practical business problems.',
         'Developed the research database with Microsoft Excel and Power BI for portfolio management, working with digital products in an iterative development cycle.']}],
      'education': [{'degree': 'Masters in Quantitative Finance',
        'field': 'Quantitative Finance',
        'university': 'Oklahoma State University',
        'duration': 'August 2021 – May 2023',
        'cgpa': '3.55 (up to 27 credit hours/3 semesters)'},
       {'degree': 'Bachelor of Business Administration (Finance)',
        'field': 'Finance',
        'university': 'University of Dhaka',
        'duration': '2013 – 2016'}],
      'skills': [{'technical_skills': ['Financial modelling',
         'Option valuation',
         'Algorithmic trading',
         'Portfolio management',
         'Equity research',
         'Quantitative analysis'],
        'soft_skills': ['Interactive communication',
         'Presentation and public speaking'],
        'computer_application': ['Data analytics with Python, R, SAS, C++, and Excel',
         'Data visualization with Power BI and Excel VBA',
         'Database management with SQL']}],
      'others': [{'achievements': ['Chartered Financial Analyst (CFA) Certification: Passed CFA Level 2 in 2018 CFA Program with 90th percentile score and a candidate for 2023 CFA Level 3 exam']},
       {'extracurricular_activities': ['Team Leader, Rotman International Trading Competition (RITC) 2022',
         'Participation in Bloomberg Trading Challenge 2022',
         'Moderator (Chair), Thalassemia Awareness Group Dhaka University (TAGDU)']}],
      'modification': [{'job': 'Graduate Research Assistant/Teaching Assistant',
        'company': 'Department of Finance, Oklahoma State University',
        'changed_sentence': 'Supported professors in data collection for research, utilizing SQL and Python to drive impactful data science projects that tackle ambiguous problem spaces.',
        'original_sentence': 'Supporting professor in data collection for research'},
       {'job': 'Equity Research Analyst',
        'company': 'Sheltech Brokerage Limited',
        'changed_sentence': 'Prepared budget reports and industry reports, synthesizing data learnings into compelling stories for external stakeholders.',
        'original_sentence': 'Responsible for preparing budget reports and industry reports'},
       {'job': 'Equity Research Analyst',
        'company': 'UniCap Securities Limited',
        'changed_sentence': 'Developed daily & weekly market research, monetary policy reports, mutual funds reviews, and budget reports, demonstrating clear communication and efficient execution.',
        'original_sentence': 'Responsible for developing daily & weekly market research, monetary policy reports, mutual funds reviews, and budget reports'}],
      'percentage_change': [{'initial_percentage_match': '60%',
        'final_percentage_match': '80%',
        'reasons': 'The percentage match increased due to the modification of the responsibilities to incorporate the requirements of the job, such as driving impactful data science projects, influencing external stakeholders, and applying complex modeling frameworks to practical business problems.'}]};

    // Populate personal information
    const personalInfoSection = document.getElementById('personal_information');
    const personalInfo = data.personal_information[0];
    personalInfoSection.innerHTML = `
        <div id="name">${personalInfo.name}</div>
        <div id="phone"><a href="tel:+17323723332">${personalInfo.phone}</a></div>
        <div id="email"><a href="mailto:${personalInfo.email}">${personalInfo.email}</a></div>
        <div id="linkedin"><a href="${personalInfo.linkedin}" target="_blank">Linkedin</a></div>
    `;

    // Populate summary
    const summarySection = document.getElementById('summary_content');
    const summary = data.summary[0];
    summarySection.textContent = summary.objective;

    // Populate work experience
    const workExperienceContent = document.getElementById('work_experience_content');
    data.work_experience.forEach((job) => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');
        jobDiv.innerHTML = `
            <div class="job-header">${job.role} - ${job.company} | ${job.duration}</div>
            <ul class="responsibilities">
                ${job.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
            </ul>
        `;
        workExperienceContent.appendChild(jobDiv);
    });

    // Populate education
    const educationSection = document.getElementById('education_content');
    data.education.forEach((edu) => {
        const eduDiv = document.createElement('div');
        eduDiv.classList.add('education');
        eduDiv.innerHTML = `
            <div class="education-header">${edu.degree} in ${edu.field} | ${edu.duration}</div>
        `;
        educationSection.appendChild(eduDiv);
    });

    // Populate skills
    const skillsSection = document.getElementById('skills_content');
    skillsSection.innerHTML = `<ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`;

    // Populate others
    const othersSection = document.getElementById('others_content');
    data.others.forEach((other) => {
        for (const [key, values] of Object.entries(other)) {
            othersSection.innerHTML += `
                <div class="section-title">${capitalizeTitle(key)}</div>
                <ul>
                    ${values.map(value => `<li>${value}</li>`).join('')}
                </ul>
            `;
        }
    });

    function capitalizeTitle(title) {
        return title.replace(/_/g, ' ')   // Replace underscores with spaces
                    .replace(/\b\w/g, char => char.toUpperCase());  // Capitalize each word
    }
});