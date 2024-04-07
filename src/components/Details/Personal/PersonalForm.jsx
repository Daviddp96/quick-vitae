import { useState } from "react";
import Input from "../../UI/Input";
import ToggleButton from "../../UI/ToggleButton";
import ProfilePicture from "./ProfilePicture";

const PersonalForm = ({onUpdatePersonalDetails, onChangePicture, personalDetails, profilePicture}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleExpand = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    }

    return (
        <div className="edit-section__form-entry">
            <div className="form-actions">
                <p>Please fill in your details below:</p>
                <ToggleButton 
                    isExpanded={isExpanded}
                    onClick={() => handleExpand()}
                />
            </div>
            {isExpanded && 
                <>
                    <div className="flex-row profile-row">
                        <ProfilePicture 
                            profilePicture={profilePicture}
                            onChangePicture={onChangePicture}
                        />
                        <div className="names-flex">
                            <Input 
                                identifier='firstName'
                                label='First name'
                                value={personalDetails.firstName}
                                type='text'
                                onChange={(event) => onUpdatePersonalDetails('firstName', event.target.value)}
                            />
                            <Input 
                                identifier='lastName'
                                label='Last name'
                                value={personalDetails.lastName}
                                type='text'
                                onChange={(event) => onUpdatePersonalDetails('lastName', event.target.value)}
                            />
                            <Input 
                                identifier='email'
                                label='Email'
                                value={personalDetails.email}
                                type='email'
                                onChange={(event) => onUpdatePersonalDetails('email', event.target.value)}
                            />
                        </div>
                    </div>

                    <Input 
                        identifier='headline'
                        label='Headline'
                        value={personalDetails.headline}
                        type='text'
                        onChange={(event) => onUpdatePersonalDetails('headline', event.target.value)}
                    />
                    <div className="flex-row">
                        <Input
                            identifier='phone'
                            label='Phone number'
                            value={personalDetails.phone}
                            type='text'
                            onChange={(event) => onUpdatePersonalDetails('phone', event.target.value)}
                        />
                    </div>
                    <Input
                        identifier='site'
                        label='Website'
                        value={personalDetails.site}
                        type='text'
                        onChange={(event) => onUpdatePersonalDetails('site', event.target.value)}
                    />
                </>
            }
        </div>
    )
};

export default PersonalForm;