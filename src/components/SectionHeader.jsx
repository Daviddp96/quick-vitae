const DetailsHeader = ({stepNumber, title, description, buttonText, onClick}) => {
    return (
        <div className="edit-section__header">
            <div className="edit-section__heading">
                <span className="edit-section__step">{stepNumber}</span>
                <h2 className="edit-section__title">{title}</h2>
            </div>
            <div className="edit-section__info">
                <p>{description}</p>
                {buttonText ? <button className="button cta-button action-button" onClick={onClick}>{buttonText}</button> : null}
            </div>
        </div>
    );
};

export default DetailsHeader;