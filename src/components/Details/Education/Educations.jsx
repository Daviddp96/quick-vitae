import EditSection from "../../Section";
import DetailsHeader from "../../SectionHeader";
import EducationEntry from "./EducationEntry";

const Educations = ({
    education,
    onAddEducation,
    onUpdateEducation,
    onDeleteEducation,
}) => {
    return (
        <EditSection>
            <DetailsHeader
                stepNumber={3}
                title="Education & Certificates"
                description="Your educational background showcases your dedication to continuous learning and development. List your degrees in reverse chronological order, starting with your most recent one. If you haven't completed a formal degree program, consider including relevant certifications or training courses you've taken to demonstrate your commitment to acquiring new skills." 
                buttonText='+ Add education'
                onClick={onAddEducation}
            />
            {education.map((education) => 
                <EducationEntry
                    key={education.id}
                    education={education}
                    onDeleteEducation={onDeleteEducation}
                    onUpdateEducation={onUpdateEducation}
                />
            )}
        </EditSection>
    );
};

export default Educations;