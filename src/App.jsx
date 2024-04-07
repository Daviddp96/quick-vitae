import { useState } from "react"
import uniqid from "uniqid";
import Header from "./components/Header"
import NavBar from "./components/Nav/NavBar"
import Main from "./components/Main"
import DetailsPage from "./pages/DetailsPage"
import PreviewPage from "./pages/PreviewPage";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState('details');
  const [profilePicture, setProfilePicture] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    email: '',
    phone: '',
    site: '',
  });
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [skillDetails, setSkillDetails] = useState([]);

  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [currentFont, setCurrentFont] = useState('RobotoCondensed');
  const [colors, setColors] = useState({
    firstNameColor: '#0B486B',
    lastNameColor: '#0B486B',
    headlineColor: '#444440',
    contactIconColor: '#0B486B',
    contactTextColor: '#444440',
    sectionDecorationColor: '#FFFFFF',
    sectionTitleColor: '#0B486B',
    sidebarColor: '#0B486B',
    documentColor: '#FFFFFF',
    leftTextColor: '#FFFFFF',
    rightTextColor: '#444440',
  });
  

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const handleUpdatePersonalDetails = (id, value) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }))
  }

  const handleChangePicture = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  }

  // Experience
  const handleAddExperience = () => {
    setExperienceDetails([...experienceDetails, {
      id: uniqid(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      contract: '',
      summary: ''
    }]);
  }

  const handleUpdateExperience = (experience) => {
    setExperienceDetails((prevExperiences) => {
      const experienceIndex = experienceDetails.findIndex((exp) => exp.id === experience.id);
      const updatedExperience = experience;
      return [
        ...prevExperiences.slice(0, experienceIndex),
        updatedExperience,
        ...prevExperiences.slice(experienceIndex + 1),
      ]
    });
  }

  const handleDeleteExperience = (id) => {
    setExperienceDetails(experienceDetails.filter((experience) => id !== experience.id));
  }

  // Education
  const handleAddEducation = () => {
    setEducationDetails([...educationDetails, {
      id: uniqid(),
      institution: '',
      startDate: '',
      endDate: '',
      certification: '',
      summary: ''
    }]);
  }

  const handleUpdateEducation = (education) => {
    setEducationDetails((prevEducation) => {
      const educationIndex = educationDetails.findIndex((ed) => ed.id === education.id);
      const updatedEducation = education;
      return [
        ...prevEducation.slice(0, educationIndex),
        updatedEducation,
        ...prevEducation.slice(educationIndex + 1),
      ]
    });
  }

  const handleDeleteEducation = (id) => {
    setEducationDetails(educationDetails.filter((education) => id !== education.id));
  }

  // Skills
  const handleAddSkill = () => {
    setSkillDetails([...skillDetails, {
      id: uniqid(),
      name: '',
    }]);
  }

  const handleUpdateSkill = (skill) => {
    setSkillDetails((prevSkills) => {
      const skillIndex = skillDetails.findIndex((sk) => sk.id === skill.id);
      const updatedSkill = skill;
      return [
        ...prevSkills.slice(0, skillIndex),
        updatedSkill,
        ...prevSkills.slice(skillIndex + 1),
      ]
    });
  }

  const handleDeleteSkill = (id) => {
    setSkillDetails(skillDetails.filter((skill) => id !== skill.id));
  }

  return (
    <>
      <Header>
        <NavBar
          onChangeSection={handleSectionChange}
        ></NavBar>
      </Header>
      <Main>
        {currentSection === 'details' && 
          <DetailsPage 
            personalDetails={personalDetails} 
            onUpdatePersonalDetails={handleUpdatePersonalDetails} 
            profilePicture={profilePicture}
            onChangePicture={handleChangePicture}
            experiences={experienceDetails}
            onAddExperience={handleAddExperience}
            onUpdateExperience={handleUpdateExperience}
            onDeleteExperience={handleDeleteExperience}
            education={educationDetails}
            onAddEducation={handleAddEducation}
            onUpdateEducation={handleUpdateEducation}
            onDeleteEducation={handleDeleteEducation}
            skills={skillDetails}
            onAddSkill={handleAddSkill}
            onUpdateSkill={handleUpdateSkill}
            onDeleteSkill={handleDeleteSkill}
          />
        }
        {currentSection === 'preview' && 
          <section style={{width: '100%', height: '1200px'}}>
            <PreviewPage 
              profilePicture={profilePicture}
              personalData={personalDetails}
              experiences={experienceDetails}
              education={educationDetails}
              skills={skillDetails}
              language={currentLanguage}
              colors={colors}
              layout='sidebar'
              fontFamily={currentFont}
            />
          </section>
        }
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App;