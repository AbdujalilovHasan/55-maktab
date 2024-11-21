import './Teachers.css';
import { teacherData } from '../../constants/TeacherData';
import img1 from '../../assets/images/Group 23.png';
import img2 from '../../assets/images/Rectangle 22.png';
import TeacherItem from './TeacherItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

function Teachers() {
    return (
        <div>
            <section className="main">
                <div className="main-top-row">
                    <div className="section-title">
                        <h1>
                            55-O`RTA TA`LIM <br /> MAKTABI ni ustozlari
                        </h1>
                    </div>
                    <div className="section-arrow">
                        <img src={img1} alt="Arrow Icon" />
                    </div>
                </div>
                <Swiper
                    spaceBetween={78}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    breakpoints={{
                        640: { slidesPerView: 1 }, 
                        1024: { slidesPerView: 1 },
                        1280: { slidesPerView: 3 }, 
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {teacherData.map((teacher, index) => (
                        <SwiperSlide key={`teacher-${index}`}>
                            <TeacherItem
                                teacherName={teacher.teacherName}
                                position={teacher.position}
                                description={teacher.description}
                                teacherImg={teacher.teacherImg || img2}
                                cardImg={teacher.cardImg}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </div>
    );
}

export default Teachers;