import React from "react"
import {useHistory} from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import {baseUrl} from "../../constants/url"
import {Title, TripDetailsContainer, TripsList, Button} from "./styles"


const TripsManagerHomePage = () => {
 const history = useHistory()
 
    const getTrips = useRequestData(`${baseUrl}trips`,undefined)

    const detailsCandidates = (id) => {
        history.push(`/managerarea/analytics/${id}`)
    }

    const goToCreatePage = () => {
        history.push("/managerarea/create")
    }

    const goToAllTrips = () => {
        history.push("/alltrips")
    }
    return (
    <TripDetailsContainer>
        <Title>Lista de Viagens disponíveis</Title>
            {getTrips && getTrips.trips.map((item) => {  
                return (
                    <TripsList onClick={() => detailsCandidates(item.id)}>
                      {item.name}
                    </TripsList>
                )
            })}     

        <Button onClick={goToCreatePage}>Criar Viagem</Button>
        <Button onClick={goToAllTrips}>Sair</Button>
    </TripDetailsContainer>
  )
}

export default TripsManagerHomePage