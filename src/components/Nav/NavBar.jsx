const NavBar = ({onChangeSection}) => {
    return (
        <nav className="main-nav">
            <div className="logo-container">
                <h1 className="logo__text">Quick<span className="blue-text">Vitae</span></h1>
            </div>
            <div className="list-container">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <button 
                            className="button nav-button"
                            onClick={() => onChangeSection('details')}
                        >
                            Details
                        </button>
                    </li>
                    <li className="nav-list__item">
                        <button 
                            className="button cta-button"
                            onClick={() => onChangeSection('preview')}
                        >
                            Preview
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;