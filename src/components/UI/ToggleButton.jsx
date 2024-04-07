const ToggleButton = ({isExpanded, onClick}) => {
    return (
        <button onClick={onClick} className="toggle-button">
            {isExpanded ?  
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            }
        </button>
    );
};

export default ToggleButton;