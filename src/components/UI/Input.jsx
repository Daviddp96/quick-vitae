const Input = ({label, identifier, type, required, value, onChange, className}) => {
    return (
        <div className={className ? `input-container ${className}` : "input-container"}>
            <label htmlFor={identifier}>{label}:</label>
            <input 
                id={identifier} 
                name={identifier} 
                type={type} 
                required={required} 
                value={value}
                accept={type === "file" ? "image/*" : undefined}
                onChange={onChange}
            />
        </div>
    );
  };
  
  export default Input;