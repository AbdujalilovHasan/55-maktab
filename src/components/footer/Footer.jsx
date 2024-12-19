import logo from "../../assets/images/logo3.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-left">
              <div className="logo">
                <img width="100px" src={logo} alt="Logo" />
              </div>
              <div className="addres">
                <div className="addres-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="addres-text">
                  <p>Sergeli 5 o`zgarish maxalla ruparasi, Узбекистан</p>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="telegram">
                <div className="telegram-icon">
                  <i className="bi bi-telegram"></i>
                </div>
                <div className="telegram-text">
                  <a href="">@55_maktab</a>
                </div>
              </div>
              <div className="telephone">
                <div className="telephone-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="telephone-text">
                  <a href="tel:+998000000000">+998(00)000-00-00</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-school">
            <p>@55maktab2018</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
