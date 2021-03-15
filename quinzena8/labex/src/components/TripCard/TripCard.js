import {useHistory} from "react-router-dom"
import {DivTripCard, ApplyButton} from './styles'



const ShowCard = (props) => {
 const history =  useHistory()
    
    const goToFormPage = (id) => {
        history.push(`/alltrips/details/applicationform/${id}`)
    }
   
        return (
                <DivTripCard>
                    <div>{props.image}</div>
                    <h1>{props.name}</h1>
                    <p>Descrição: {props.description}</p>
                    <p>Data: {props.date}</p>
                    <p>Planeta: {props.planet}</p>
                    <p>Duração em dias: {props.duration}</p>
                    <div>
                    <ApplyButton onClick={() => goToFormPage(props.id)}> Se aplicar </ApplyButton>
                    </div>
                    
                </DivTripCard>
        )
}

export default ShowCard


