import { useState } from "react";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import ToggleButton from "../../UI/ToggleButton";

const ExperienceEntry = ({experience, onDeleteExperience, onUpdateExperience}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [experienceInfo, setExperienceInfo] = useState({
        id: experience.id,
        company: experience?.company || '',
        role: experience?.role || '',
        contract: experience?.contract || '',
        startDate: experience?.startDate || '',
        endDate: experience?.endDate || '',
        summary: experience?.summary || '',
    });

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    }

    const handleInputChange = (id, field, value) => {
        console.log(id);
        setExperienceInfo((prevInfo) => {
            const updatedInfo =  {
                ...prevInfo,
                [field]: value
            }
            onUpdateExperience(updatedInfo);
            return updatedInfo;
        });
        console.log(experienceInfo);

    };


    return (
        <div className="edit-section__form-entry">
            <div className="form-actions">
                <p><strong>{experienceInfo.company ? experienceInfo.company : "Company"}</strong></p> 
                <div className="form-actions-buttons">
                    <ToggleButton 
                        isExpanded={isExpanded}
                        onClick={() => handleExpand()}                    
                    />
                    <button onClick={() => onDeleteExperience(experience.id)} className="delete-button">Delete</button>
                </div>
            </div>
            {isExpanded && 
                <>
                    <Input 
                        label='Company'
                        identifier='company'
                        type='text'
                        required={true}
                        value={experienceInfo.company}
                        onChange={(event) => handleInputChange(experience.id, 'company', event.target.value)}
                    />
                    <div className="flex-row">
                        <Input 
                            label='Role'
                            identifier='role'
                            type='text'
                            required={true}
                            value={experienceInfo.role}
                            onChange={(event) => handleInputChange(experience.id, 'role', event.target.value)}
                        />
                        <Input 
                            label='Employment type'
                            identifier='contract'
                            type='text'
                            required={true}
                            value={experienceInfo.contract}
                            onChange={(event) => handleInputChange(experience.id, 'contract', event.target.value)}
                        />
                    </div>
                    <div className="flex-row">
                        <Input 
                            label='Start date'
                            identifier='startDate'
                            type='text'
                            required={true}
                            value={experienceInfo.startDate}
                            onChange={(event) => handleInputChange(experience.id, 'startDate', event.target.value)}
                        />
                        <Input 
                            label='End date or present'
                            identifier='endDate'
                            type='text'
                            required={true}
                            value={experienceInfo.endDate}
                            onChange={(event) => handleInputChange(experience.id, 'endDate', event.target.value)}
                        />
                    </div>
                    <Textarea 
                        label="Summary"
                        identifier="summary"
                        value={experienceInfo.summary}
                        onChange={(event) => handleInputChange(experience.id, 'summary', event.target.value)}
                    />
                </>
            }
        </div>
    )
};

export default ExperienceEntry;