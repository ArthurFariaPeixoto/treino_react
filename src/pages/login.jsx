import {Grid, TextField , FormGroup, Input} from '@mui/material';
import {useForm} from "react-hook-form";

import React from "react";
import {Navigate} from "react-router-dom";

import '../theme/css/style.css';

function Login () {
    const {register, handleSubmit} = useForm();
    const [goToHome, setGoToHome] = React.useState(false);
    const x=document.getElementById('bodyLogin');

    x.classList.add('bodyLogin');

    if(goToHome){
        return <Navigate to="/home"/>;
    }

    const onSubmit = (data) => {
        
        if(data.Login ==='admin' && data.Senha ==='admin'){
            alert("Login feito com sucesso");
            setGoToHome(true);
        }else{
            alert("Login inválido, login certo se encontra no console");
            console.log("Login: admin   Senha: admin");
        }

    }

    return(
        <section className="login section" align ="center">
            <Grid className="panel-body">
                <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                    <Grid className='telaLogin'>
                        <Grid className='linha'>
                            <FormGroup>
                                <Grid>
                                    <TextField {...register("Login", {required: "true", minLength:1})} placeholder="Login" id="login" name="Login"/>
                                </Grid>
                                
                            </FormGroup>
                        </Grid>             
                        <Grid className='linha'>
                            <FormGroup>
                                <Grid className='loginForm'>
                                    <TextField {...register("Senha", {required: true})} placeholder='Senha' id="senha" name="Senha" type="password"/>
                                </Grid>
                            </FormGroup>
                        </Grid>
                    </Grid>          
                    <Grid className="row">
                        <Grid className="col-md-12">
                            <Grid id="container-notificacoes"></Grid>
                        </Grid>
                    </Grid>
                    <Grid className="row">
                        <Grid className="col-md-12">
                            <Input type="submit" variant="outlined" id="botao_logar" name="entrar" value="Entrar"/>
                        </Grid>
                    </Grid>
                </form>
            </Grid>          

        </section>
    );
}

export default Login;