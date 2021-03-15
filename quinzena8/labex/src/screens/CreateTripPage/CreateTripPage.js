import React, {useState} from "react";
import axios from "axios";
import NavBarAdm from "../../components/NavBarAdm/NavBarAdm";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { baseUrl, axiosConfig } from "../../constants/request";
import { FormContainer } from "./styled";
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const CreateTripPage = () => {
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: '',
    date: '',
  })

  useProtectedPage();  
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      duration: form.duration
    }

    console.log("body", form.name)
    console.log("axiosConfig", axiosConfig)

    axios
    .post(`${baseUrl}/trips`, body, {headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then((response) => {alert("Viagem criada")})
      .catch((error)=>{console.log(error)})
  }
   return (
    <div>
      <NavBarAdm />
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          label={'Nome da Missão'} 
          onChange={onChangeInput}
          name={'name'}
          value={form['name']}
        />
        <TextField
          label={'Planeta'}
          onChange={onChangeInput}
          name={'planet'}
          value={form['planet']}
        />
        <TextField
          value={form['date']}
          min="2021-01-01"
          type="date"
          name="date"
          onChange={onChangeInput}
          required
        />

        <TextField
          label={'Descrição'}
          onChange={onChangeInput}
          name={'description'}
          value={form['description']}
        />
        <TextField
          label={'Duração em dias'} type={'number'}
          onChange={onChangeInput}
          name={'duration'}
          value={form['duration']}
        />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Criar</Button>
    </FormContainer>
    </div>
  );
};

export default CreateTripPage;