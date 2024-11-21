import { useState, useEffect } from "react";
import img1 from "../../assets/images/Group 12.png";
import img2 from "../../assets/images/Group 8.png";

import "./Students.css";

function Students() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [athletesCount, setAthletesCount] = useState(0);
  const [geniusesCount, setGeniusesCount] = useState(0);

  const [animateStudents, setAnimateStudents] = useState(false);
  const [animateAthletes, setAnimateAthletes] = useState(false);
  const [animateGeniuses, setAnimateGeniuses] = useState(false);

  const animateNumber = (setter, start, end, duration, setAnimation) => {
    let startTime = null;

    const updateNumber = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        setAnimation(true);
      }
    };

    requestAnimationFrame(updateNumber);
  };

  useEffect(() => {
    animateNumber(setStudentsCount, 0, 1000, 5000, setAnimateStudents);
    animateNumber(setAthletesCount, 0, 260, 5000, setAnimateAthletes);
    animateNumber(setGeniusesCount, 0, 300, 5000, setAnimateGeniuses);
  }, []);

  return (
    <div>
      <main className="main">
        <h1>
          55-O`RTA TA`LIM <br /> MAKTABI ning o`quvchilari
        </h1>
        <div className="main-row">
          <div className="main-left">
            <div className="main-img">
              <img src={img1} alt="Group 12" />
            </div>
            <div className="main-card1">
              <h2 className={animateStudents ? "number-animation" : ""}>
                {studentsCount.toLocaleString()}+
              </h2>
              <p>o`quvchi</p>
            </div>
            <div className="main-card2">
              <h2 className={animateAthletes ? "number-animation" : ""}>
                {athletesCount}+
              </h2>
              <p>sport ustasi</p>
            </div>
            <div className="main-card3">
              <h2 className={animateGeniuses ? "number-animation" : ""}>
                {geniusesCount}+
              </h2>
              <p>zakovat ustasi</p>
            </div>
            <div className="main-icons">
              <img src={img2} alt="Icons" />
            </div>
          </div>
          <div className="main-right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda unde iusto adipisci non dolores a animi neque mollitia
              inventore eum nobis, obcaecati repellat, voluptatibus delectus
              pariatur corrupti facilis cupiditate eos quidem quam blanditiis
              atque illo. Molestiae necessitatibus veniam beatae obcaecati.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Students;
