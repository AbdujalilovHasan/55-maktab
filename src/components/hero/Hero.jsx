import img1 from '../../assets/images/Vector 5.png'
import img2 from '../../assets/images/portrait-female-teacher-suit-green 1.png'
import img3 from '../../assets/images/back-view-kids-writing-board-scaled 1.png'
import img4 from '../../assets/images/Group 38.png'

import './Hero.css'

function Hero() {
    return (
        <div>
            <header>
                <div className="header-row">
                    <div className="header-left">
                        <h1>55-O`RTA TA`LIM MAKTABI</h1>
                        <span>
                            <img src={img1} alt="line" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa, ratione voluptas natus
                            molestias, fugiat tenetur minus autem non sunt aperiam vero quibusdam repellendus accusantium
                            eveniet omnis iusto totam sint exercitationem, consectetur cupiditate voluptate!
                        </p>
                        <div className="header-left-bottom">
                            <div className="header-card">
                                <h2>MALAK-ALI</h2>
                                <h3>300+</h3>
                                <p className='teachers-text'>USTOZLAR</p>
                                <div className="header-card-img">
                                    <img src={img2} alt="Ustoz rasmi" />
                                </div>
                            </div>
                            <div className="header-card2">
                                <div className="header-card-img2">
                                    <img src={img3} alt="Bolalar rasmi" />
                                </div>
                                <h2>Intiluvchan bolalar</h2>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-img">
                            <img src={img4} alt="Maktab haqida tasvir" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Hero;