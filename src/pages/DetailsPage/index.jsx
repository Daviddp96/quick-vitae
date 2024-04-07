import Educations from "../../components/Details/Education/Educations";
import Experiences from "../../components/Details/Experience/Experiences";
import Personal from "../../components/Details/Personal/Personal";
import Skills from "../../components/Details/Skills/Skills";

const DetailsPage = ({
    personalDetails, 
    onUpdatePersonalDetails, 
    profilePicture,
    onChangePicture,
    experiences,
    onAddExperience,
    onUpdateExperience,
    onDeleteExperience,
    education,
    onAddEducation,
    onUpdateEducation,
    onDeleteEducation,
    skills,
    onAddSkill,
    onUpdateSkill,
    onDeleteSkill
}) => {
    return (
        <>
            <Personal 
                personalDetails={personalDetails}
                onUpdatePersonalDetails={onUpdatePersonalDetails}
                profilePicture={profilePicture}
                onChangePicture={onChangePicture}
            />
            <Experiences
                experiences={experiences}
                onAddExperience={onAddExperience}
                onUpdateExperience={onUpdateExperience}
                onDeleteExperience={onDeleteExperience}
            />
            <Educations
                education={education}
                onAddEducation={onAddEducation}
                onUpdateEducation={onUpdateEducation}
                onDeleteEducation={onDeleteEducation}
            />
            <Skills
                skills={skills}
                onAddSkill={onAddSkill}
                onUpdateSkill={onUpdateSkill}
                onDeleteSkill={onDeleteSkill}
            />
        </>
    );
};

export default DetailsPage;