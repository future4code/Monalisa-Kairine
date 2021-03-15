import React from "react"
import {useHistory} from "react-router-dom"
import {Container, Button, ContainerButtons, Logo, ContainerLogo} from "./styles"
import rocket from "../../Assets/rocket-launch.svg"
const HomePage = () => {
    
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripsPage = () => {
        history.push("/alltrips")
    }

    return(
        <Container>
            <ContainerLogo>
                <Logo src={rocket}/>
                <h1> LabeX</h1>
            </ContainerLogo>
            <ContainerButtons>
                <Button onClick={goToLoginPage}>Login</Button>
                <Button onClick={goToTripsPage}>Ver Viagens</Button>
            </ContainerButtons>
        </Container>
    )
}

export default HomePage