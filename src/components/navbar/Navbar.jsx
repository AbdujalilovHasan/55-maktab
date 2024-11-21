import logo from '../../assets/images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-row">
                    <div className="nav-left">
                        <div className="logo">
                            <img width="100px" src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="nav-links">
                            <ul>
                                <li>
                                    <a href="#">ASOSIY</a>
                                </li>
                                <li>
                                    <a href="#link2">MA`LUMOT</a>
                                </li>
                                <li>
                                    <a href="#link3">YANGILIKLAR</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-btn">
                            <a href="tel:+000(00)00-00-00">
                                <button>
                                    +000(00)00-00-00
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;