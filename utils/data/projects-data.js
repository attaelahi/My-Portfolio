import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Age and Gender Detection App',
        description: "This is a Streamlit web application that allows users to upload a photo and determine the age and gender of the person in the photo. The app utilizes deep learning models for age and gender detection.",
        tools: ['Python', 'Huggingface', 'OpenAI API', 'Streamlit', 'Models'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Hostel Ease Web App',
        description: 'Introducing Hostel Ease – your go-to platform for stress-free hostel living. Find the perfect accommodation effortlessly with our user-friendly interface. Connect with fellow students and embrace a vibrant community. Say goodbye to hassle and hello to ease with Hostel Ease.',
        tools: ['PHP', 'Tailwind CSS', "Google Maps", "Laravel", "Bootstrap", "MySQL", "VS code-Editor",],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Auto Evaluator',
        description: 'The Auto-Evaluator is a sophisticated tool designed to automate the evaluation process for question-answering systems. Leveraging advanced natural language processing (NLP) techniques and machine learning models, this tool streamlines the assessment of a system performance on a given set of documents and associated questions.',
        tools: ['Python', 'GPT-API', 'Streamlit', 'Models', 'LLM', 'UI', 'MongoDB', 'OpenAI API'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Solved Things',
        description: "Solved Things is an online platform dedicated to fostering intellectual growth and collaboration among individuals with a thirst for knowledge. Whether you're a student, educator, professional or simply someone eager to share your expertise. Solved Things provides the perfect space to connect, learn and inspire.",
        tools: ['NextJS', 'Material UI', 'MYSQL', 'LMS', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },