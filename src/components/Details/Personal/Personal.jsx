import EditSection from "../../Section";
import DetailsHeader from "../../SectionHeader";
import PersonalForm from "./PersonalForm";

const Personal = ({
    personalDetails,
    onUpdatePersonalDetails,
    profilePicture,
    onChangePicture
}) => {
    return (
        <EditSection>
            <DetailsHeader 
                stepNumber={1}
                title="Personal Information"
                description="Start strong, make a lasting impression.  This section is your digital handshake. Fill in your contact information, headline, and website (optional) to introduce yourself to potential employers." 
                buttonText={null}
            />
            <PersonalForm 
                onUpdatePersonalDetails={onUpdatePersonalDetails}
                personalDetails={personalDetails}
                onChangePicture={onChangePicture}
                profilePicture={profilePicture}
            />
        </EditSection>
    );
};

export default Personal;