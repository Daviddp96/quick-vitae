import EditSection from "../../Section";
import DetailsHeader from "../../SectionHeader";
import SkillEntry from "./SkillEntry";

const Skills = ({
    skills,
    onAddSkill,
    onUpdateSkill,
    onDeleteSkill 
}) => {
    return (
        <EditSection>
            <DetailsHeader
                stepNumber={4}
                title="Skills & Software"
                description="Highlight the skills and qualifications that directly relate to the requirements of the position you're applying for. Be specific about your technical skills, communication abilities, and problem-solving expertise. Show the employer how your unique skillset makes you the perfect fit for the role." 
                buttonText='+ Add new skill'
                onClick={onAddSkill}    
            />
            {skills.map((skill) => 
                <SkillEntry
                    key={skill.id}
                    skill={skill}
                    onDeleteSkill={onDeleteSkill}
                    onUpdateSkill={onUpdateSkill}
                />
            )}
        </EditSection>
    );
};

export default Skills;