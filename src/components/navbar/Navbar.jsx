import logo from '../../assets/images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-logo" href="#">
                    <img width="100px" src={logo} alt="Logo" />
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* Use mx-auto to center */}
                        <li className="nav-item">
                            <a className="nav-link fs-4 fw-bold active" aria-current="page" href="#">
                                Asosiy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 fw-bold" href="#">
                                Ma`lumot
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4 fw-bold" href='#'>
                                Ariza topshirish
                            </a>
                        </li>
                    </ul>

                    <div className="nav-btn">
                        <a href="tel:+000(00)00-00-00">
                            <button className="btn btn-primary">
                                +000(00)00-00-00
                            </button>
                        </a>
                    </div>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;