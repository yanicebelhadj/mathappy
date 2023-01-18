import CourseRecommandation from "../components/course-recommandation/course-recommandation.component"
import LastCourse from "../components/last-course/last-course.component"
import MyCourses from "../components/my-courses/my-courses.component"

import ProfilePicture from "../media/ProfilePicture.png"

import "../css/DashBoard.styles.css"
import Header from "../components/header/header.component"

function DashBoard(){
    return(
        <div className="dash-board">
            <div className="main-section">
                <Header visible />
                <div className="main-section-first-line">
                    <LastCourse />
                    <CourseRecommandation />
                </div>
                <MyCourses />
            </div>
            <div className="profile-section">
                <p className="p-xl-semi-bold section-name">Mon Profil</p>

                <div className="profile-container">
                    <div className="profile-main-informations">
                        <img src={ProfilePicture} alt="avatar" />
                        <p className="p-xl-medium name">Yanice Belhadj</p>
                        <p className="p-s-regular level">Sixième</p>
                    </div>

                    <div className="profile-kpi">
                        <div className="competences">
                            <div className="picture"></div>
                            <div className="text-area">
                                <p className="p-xs-regular title">À mon actif</p>
                                <p className="p-xxs-semi-bold value">30 Compétences</p>
                            </div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="competences">
                            <div className="picture"></div>
                            <div className="text-area">
                                <p className="p-xs-regular title">Restant</p>
                                <p className="p-xxs-semi-bold value">30 Compétences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard