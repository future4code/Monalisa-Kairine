import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import { useInput } from "../../hooks/useInput";
import {baseUrl} from "../../constants/request"
import {goToAdmPage} from "../../routes/Coordinator"
import {DivLogin, TitleLogin, InputLogin, ButtonLogin} from "./styled"
import { TextField, Button } from '@material-ui/core'
import {useForm} from '../../hooks/useForm'
import {LoginForm} from './styled'


const LoginPage = () => {

  const history = useHistory();

  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()

    const body = {
      email: form["email"],
      password: form.password,
    };

    axios
      .post(baseUrl + "/login", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        goToAdmPage(history)
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token)
    if (token) {
      goToAdmPage(history);
    }
  }, [history]);



  return (
    <div>
      <NavBar/>
        <LoginForm onSubmit={onSubmit}>
          <TextField
            label={'Email'}
            type={'email'}
            onChange={onChangeInput}
            value={form['email']}
            name={'email'}
          />
          <TextField
            label={'Senha'}
            type={'password'}
            onChange={onChangeInput}
            value={form['password']}
            name={'password'}
          />
          <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </LoginForm>
  </div>
  );
};

export default LoginPage;