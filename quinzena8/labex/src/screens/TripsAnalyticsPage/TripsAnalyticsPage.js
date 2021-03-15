import axios from "axios"
import React, {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import {Title, ContainerTripDetails, PageContainer, CandidateDetails, ContainerCandidates,  Button,  ApprovedContainer} from "./styles"


const TripsAnalyticsPage = (props) => {
 const history = useHistory()
 const [trip,setTrip] = useState({})
 const pathParams = useParams()
 const id = pathParams.id
 



 const getTripDetail = () => {
    axios
      .get(
        `${baseUrl}trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const decideCandidate = (approved,candidateId) => {
    const body = {
        approve: approved
      }
    axios
      .put(`${baseUrl}trips/${id}/candidates/${candidateId}/decide`, body, 
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
      )
      .then(() => {
        getTripDetail()
      }).catch(error => {
        console.log(error)
    } )
   }

   
    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

    useEffect(() => {
      getTripDetail()
    }, [])

    return (
    <PageContainer>
        <Title>Detalhes da Viagem</Title>
        
        <ContainerTripDetails>
          <h2>{trip.name}</h2>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays} dias</p>
          <p>Data: {trip.date}</p>
        </ContainerTripDetails>

 
        <ContainerCandidates>
          <h2> Candidatos Inscritos </h2>
          {trip.candidates && trip.candidates.map((candidate) => {
            return (
            <CandidateDetails key={candidate.id}>
                <p>Candidato inscrito: {candidate.name}</p>
                <p>Texto inscrição: {candidate.applicationText}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <Button onClick={() => {decideCandidate(true, candidate.id)}}>Aceitar</Button>
                <Button  onClick={ () => {decideCandidate(false, candidate.id)}}>Rejeitar</Button>
            </CandidateDetails>
            )
          })}
        </ContainerCandidates>

        <ApprovedContainer>
          <h2>Candidatos aprovados</h2>
          {trip.approved && trip.approved.map((candidate) => {
            return ( <h4>
              {candidate.name}
              </h4>
            )
          })}
        </ApprovedContainer>
        
      <Button onClick={goToTripsManagerPage}>Voltar</Button>
    </PageContainer>
  )
}

export default TripsAnalyticsPage