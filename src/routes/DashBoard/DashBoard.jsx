import { useSelector } from "react-redux"
// import CourseRecommandation from "../../components/course-recommandation/course-recommandation.component"
import LastCourse from "../../components/last-course/last-course.component"
import MyCourses from "../../components/my-courses/my-courses.component"

import "./DashBoard.styles.css"


export default function DashBoard(){
    const menu = useSelector(state=> state.menu.open)
    return(
        <div className= {`dash-board ${menu ? "container-initialState" : "container-clickedState"}`}>
            <div className="main-section">
                <div className="main-section-first-line">
                    <LastCourse />
                    <MyCourses />
                </div>
                {/* <CourseRecommandation /> */}
                
            </div>
        </div>
    )
}


