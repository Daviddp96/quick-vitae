import EditSection from "../../Section";
import DetailsHeader from "../../SectionHeader";
import ExperienceEntry from "./ExperienceEntry";

const Experiences = ({
    experiences,
    onAddExperience,
    onUpdateExperience,
    onDeleteExperience,
}) => {
    return (
        <EditSection>
            <DetailsHeader 
                stepNumber={2}
                title="Work Experience"
                description=" Showcase your accomplishments and demonstrate the value you bring to an organization. Include a short description of your responsibilities and how you achieved impactful results in each role." 
                buttonText='+ Add experience'
                onClick={onAddExperience}
            />
            {experiences.map((experience) => (
                <ExperienceEntry
                    key={experience.id}
                    experience={experience}
                    onDeleteExperience={onDeleteExperience}
                    onUpdateExperience={onUpdateExperience}
                />
            ))}
        </EditSection>
    );
};

export default Experiences;