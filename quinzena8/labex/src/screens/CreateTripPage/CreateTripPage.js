import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"
import {Title, ContainerCreateTrip, Input, InputDescription, PlanetSelect, Button, ButtonContainer} from "./styles"
import {useForm} from "../../hooks/useForm"

const CreateTripPage = () => {
 const history = useHistory()
 const {form, onChange, resetState} = useForm({name: "", date: "", description: "", durationInDays:""})
 const [planet, setPlanet] = useState(null)

    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
        
    }

    const handleSelect = (event) => {
         setPlanet(event.target.value)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/managerarea/create")
        } 
        
    }, [history])

//requisição para entrar criar viagem - área privada
      const createTrip = (event) => {
          
        event.preventDefault()

          const body = {
              name: form.name,
              planet: planet,
              date: form.date,
              description: form.description,
              durationInDays: form.durationInDays
          }

          axios.post(`${baseUrl}trips`, body,  {
            headers: {
              auth: localStorage.getItem("token")
            }
          })
          .then((res) => {
            resetState()  
            alert("Cadastro efetuado com sucesso")
          })
          .catch((err) => {
            alert("Erro ao cadastrar. Tente novamente.")
          })
      }


        return (
               <ContainerCreateTrip>
                  <Title>CRIAR VIAGENS</Title>
                  <form onSubmit={createTrip}>
                      <Input
                      value={form.name}
                      placeholder="Nome da viagem"
                      type="text"
                      name="name"
                      onChange={handleInput}
                      pattern="[A-z0-9À-ž\s]{5,}"
                      required
                      />
                      <Input
                      value={form.date}
                      min="2021-01-01"
                      placeholder="Data"
                      type="date"
                      name="date"
                      onChange={handleInput}
                      required
                      />
                      <InputDescription
                      value={form.description}
                      placeholder="Descrição"
                      type="text"
                      name="description"
                      onChange={handleInput}
                      required
                      />
                      <Input
                      value={form.durationInDays}
                      min="50"
                      placeholder="Duração em dias"
                      type="text"
                      name="durationInDays"
                      onChange={handleInput}
                      required
                      />
                      <PlanetSelect onChange={handleSelect}>
                      <option value="país">Planeta</option>  
                      <option value={"Mercúrio"}>Mercúrio</option>
                      <option value={"Vênus"}>Vênus</option>
                      <option value={"Terra"}>Terra</option>
                      <option value={"Marte"}>Marte</option>
                      <option value={"Júpiter"}>Júpiter</option>        
                      <option value={"Saturno"}>Saturno</option>
                      <option value={"Urano"}>Urano</option>
                      <option value={"Netuno"}>Netuno</option>
                      <option value={"Plutão"}>Plutão</option>
                      </PlanetSelect>
                      <ButtonContainer>
                      <Button>Criar Viagem</Button>
                      <Button onClick={goToTripsManagerPage} >Voltar</Button>
                      </ButtonContainer>
                  </form>
                </ContainerCreateTrip>
                )
}

export default CreateTripPage