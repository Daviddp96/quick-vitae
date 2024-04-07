const Textarea = ({label, identifier, required, value, onChange}) => {
    return (
        <div className="input-container">
            <label htmlFor={identifier}>{label}:</label>
            <textarea 
                id={identifier} 
                name={identifier} 
                required={required} 
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Textarea;