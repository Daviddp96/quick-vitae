import { useState } from "react";
import ToggleButton from "../../UI/ToggleButton";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";

const EducationEntry = ({education, onDeleteEducation, onUpdateEducation}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [educationInfo, setEducationInfo] = useState({
        id: education.id,
        institution: education?.institution || '',
        startDate: education?.startDate || '',
        endDate: education?.endDate || '',
        certification: education?.certification || '',
        summary: education?.summary || '',
    });

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    }

    const handleInputChange = (id, field, value) => {
        setEducationInfo((prevInfo) => {
            const updatedInfo =  {
                ...prevInfo,
                [field]: value
            }
            onUpdateEducation(updatedInfo);
            return updatedInfo;
        });
    };


    return (
        <div className="edit-section__form-entry">
            <div className="form-actions">
                <p><strong>{educationInfo.institution ? educationInfo.institution : "Institution"}</strong></p> 
                <div className="form-actions-buttons">
                    <ToggleButton
                        isExpanded={isExpanded}
                        onClick={() => handleExpand()}
                    />
                    <button onClick={() => onDeleteEducation(education.id)} className="delete-button">Delete</button>
                </div>
            </div>
            {isExpanded && 
                <>
                    <Input 
                        label='Institution'
                        identifier='institution'
                        type='text'
                        required={true}
                        value={educationInfo.institution}
                        onChange={(event) => handleInputChange(education.id, 'institution', event.target.value)}
                    />
                    <Input 
                        label='Certification / Credential'
                        identifier='certification'
                        type='text'
                        required={true}
                        value={educationInfo.certification}
                        onChange={(event) => handleInputChange(education.id, 'certification', event.target.value)}
                    />
                    <div className="flex-row">
                        <Input 
                            label='Start date'
                            identifier='startDate'
                            type='text'
                            required={true}
                            value={educationInfo.startDate}
                            onChange={(event) => handleInputChange(education.id, 'startDate', event.target.value)}
                        />
                        <Input 
                            label='End date or present'
                            identifier='endDate'
                            type='text'
                            required={true}
                            value={educationInfo.endDate}
                            onChange={(event) => handleInputChange(education.id, 'endDate', event.target.value)}
                        />
                    </div>
                    <Textarea 
                        label="Summary"
                        identifier="summary"
                        value={educationInfo.summary}
                        onChange={(event) => handleInputChange(education.id, 'summary', event.target.value)}
                    />
                </>
            }
        </div>
    )
};

export default EducationEntry;