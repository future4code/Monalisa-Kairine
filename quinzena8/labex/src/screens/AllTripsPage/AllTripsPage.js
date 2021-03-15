import React, { useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import TripCard from "../../components/TripCard/TripCard"
import { baseUrl } from "../../constants/url"
import { useRequestData } from "../../hooks/useRequestData"
import { BackButton, ScreenContainer, PageContainer } from "./styles"


const AllTripsPage = () => {
    const history = useHistory()
    const [image, setImage] = useState({})
    const [data, setData] = useState([])

    const goToHomePage = () => {
    history.push("/")
    }

    const getTrips = useRequestData(`${baseUrl}trips`,undefined)
    console.log("getTrips", getTrips)


    const getImage = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=2019-12-${1}&api_key=oDClzfqOYnw1w9igwUNvUkgL8ZVzgshkwcFl8q8b`)
        .then((response)=> {
            setImage(response.data)
        })
    }   

    useEffect(() => {
        getImage()
      }, [])

 
  
    return (
      <PageContainer>
    
        <h1> Conheça Nossas Viagens Disponíveis!</h1>

        <ScreenContainer>
          {getTrips && getTrips.trips.map((item) => {
                return (
                <div>
                    <TripCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    duration={item.durationInDays}
                    planet={item.planet}
                    date={item.date}
                    image={<img src={image.url} alt="nasa" width="300" height="200"/>}
                    />
                </div>
                )
            })} 

        </ScreenContainer>
        <BackButton onClick={goToHomePage}>VOLTAR</BackButton>
      </PageContainer>
    )
}

export default AllTripsPage