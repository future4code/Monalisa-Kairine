import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {useForm} from "../../hooks/useForm"
import {baseUrl} from "../../constants/request"
import NavBar from "../../components/NavBar/NavBar"
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import styled from "styled-components"

const FormContainer = styled.form`
  display: grid;
  gap: 16px;
  justify-content: center;
`

const ApplicationFormPage = () => {

   const [form, onChange] = useForm({
    name: '',
    age: 18,
    applicationText: '',
    profession: '',
    country: '',

  })

  const history = useHistory();

  const {id} = useParams();

  const onSubmitApplication = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${baseUrl}/trips/${id}/apply`, body)
      .then(() => {
        alert("Aplicação submetida, boa sorte Astronauta!");
      })
      .catch((error) => {
        alert("Algo deu errado em sua aplicação");
        console.log(error);
      });
  };


   return (
    <div>
    <NavBar/>
        Aplicar para viagem

      <FormContainer onSubmit={onSubmitApplication}>
        <TextField
          label={'Nome'} 
          onChange={onChange}
          name={'name'}
          value= {form['name']}
        />
        <TextField 
          label={'Idade'}
          name={'age'}
          onChange={onChange} 
          type={'number'} 
          value={form['age']}
        />
        <TextField 
          label={'Texto de aplicação'}
          name={'applicationText'} 
          helperText="Explique por que você é uma boa pessoa candidata" 
          onChange={onChange}
          value={form['applicationText']}
        />
        <TextField 
          label={'Profissão'} 
          onChange={onChange}
          name={'profession'}
          value={form['profession']}
        />
        <FormControl>
          <InputLabel id="select-paises">Países</InputLabel>
          <Select
            labelId="select-paises"
            onChange={onChange}
            name={'country'}
            value={form['country']}
          >
            <MenuItem value={'brasil'}>Brasil</MenuItem>
            <MenuItem value={'argentina'}>Argentina</MenuItem>
            <MenuItem value={'eua'}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <Button variant={'contained'} color={'primary'} type={'submit'}>Inscrever-se</Button>
      </FormContainer>

    </div>
  );
};

export default ApplicationFormPage;