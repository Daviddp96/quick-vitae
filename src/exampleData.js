import defaultPicture from './images/placeholder.jpg';

const exampleData = {
    profilePicture: defaultPicture,
    personalInfo: {
        firstName: "Satoru",
        lastName: "Kawasaki Hayabusa",
        headline: "Frontend developer",
        email: "satoru@gojo.com",
        phone: "+81 436 8955",
        site: "https://gojo.com"
    },
    experience: [
        {
          company: "Acme Inc.",
          startDate: "January 2022",
          endDate: "Present",
          role: "Software Engineer",
          contract: "Full Time",
          summary: "Developed and maintained web applications using a variety of technologies including React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to design, implement, and test features. Ensured code quality through unit and integration testing practices.",
        },
        {
          company: "Brilliant Labs",
          startDate: "June 2020",
          endDate: "December 2021",
          role: "Web Developer",
          contract: "Full Time",
          summary: "Built and maintained responsive websites using HTML, CSS, and JavaScript. Implemented interactive functionalities using jQuery and other libraries. Optimized website performance for faster loading times.",
        },
        {
          company: "Freelance",
          startDate: "May 2018",
          endDate: "May 2020",
          role: "Web Developer",
          contract: "Freelance",
          summary: "Developed websites for various clients, focusing on e-commerce functionality and user experience. Utilized content management systems like WordPress for client-side content management.",
        },
      ],
      education: [
        {
          institution: "University of Technology",
          startDate: "2015",
          endDate: "2019",
          certification: "Bachelor of Science in Computer Science",
          summary: "Studied core computer science concepts including algorithms, data structures, and object-oriented programming. Gained experience in software development methodologies and best practices.",
        },
        {
          institution: "Community College",
          startDate: "2013",
          endDate: "2015",
          certification: "Associate's Degree in Web Development",
          summary: "Developed strong foundations in web development fundamentals, including HTML, CSS, and JavaScript. Learned web design principles and best practices for creating user-friendly interfaces.",
        },
      ],
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Agile Methodology" },
        { name: "Problem Solving" },
        { name: "Communication" },
        { name: "Teamwork" },
      ],


}

export default exampleData;