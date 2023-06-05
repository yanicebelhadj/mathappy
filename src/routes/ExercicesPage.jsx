import { useSelector } from "react-redux"

function ExercicesPage(){
    const menu = useSelector(state=> state.menu.open)
    return(
        <div className={`exercice-page ${menu ? "container-initialState" : "container-clickedState"}`}>
            
        </div>
    )
}

export default ExercicesPage