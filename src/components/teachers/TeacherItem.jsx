
function TeacherItem({ teacherName, position, description, teacherImg, cardImg }) {
    return (
        <div className="teacher-card">
            <div className="teacher-img">
                <div className="img-teacher">
                    <img src={teacherImg} alt={`${teacherName} image`} />
                </div>
            </div>
            <div className="card-img">
                <img src={cardImg} alt="Decoration" />
            </div>
            <div className="teacher-card-content">
                <div className="teacher-name2">
                    <h2>{teacherName}</h2>
                </div>
                <div className="science-education2">
                    <p>{position}</p>
                </div>
                <div className="teacher-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TeacherItem;