import { useState } from "react";
import Input from "../../UI/Input";
import ToggleButton from "../../UI/ToggleButton";

const SkillEntry = ({skill, onDeleteSkill, onUpdateSkill}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [skillInfo, setSkillInfo] = useState({
        id: skill.id,
        name: skill?.name || '',
    });

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    }

    const handleInputChange = (id, field, value) => {
        setSkillInfo((prevInfo) => {
            const updatedInfo =  {
                ...prevInfo,
                [field]: value
            }
            onUpdateSkill(updatedInfo);
            return updatedInfo;
        });
    };


    return (
        <div className="edit-section__form-entry">
            <div className="form-actions">
                <p><strong>{skillInfo.name ? skillInfo.name : "Skill"}</strong></p> 
                <div className="form-actions-buttons">
                    <ToggleButton 
                        isExpanded={isExpanded}
                        onClick={() => handleExpand()}
                    />
                    <button onClick={() => onDeleteSkill(skill.id)} className="delete-button">Delete</button>
                </div>
            </div>
            {isExpanded && 
                <Input 
                    label='Skill / Software'
                    identifier='name'
                    type='text'
                    required={true}
                    value={skillInfo.name}
                    onChange={(event) => handleInputChange(skill.id, 'name', event.target.value)}
                />
            }
        </div>
    )
};

export default SkillEntry;