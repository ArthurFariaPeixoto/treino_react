import {Grid} from '@mui/material';
import {Link} from "react-router-dom"

import '../css/style.css';

function Main_page (props) {
    let x=document.getElementById('bodyLogin');
    x.classList.remove('bodyLogin');
        return(
            <Grid>
                <Grid align ="right">
                    <Link to="/">Logout</Link>
                </Grid>  
                <Grid align ="center">
                    <h1>Bem-vindo</h1>
                </Grid>     
                   
            </Grid>
        );
        // return <Navigate to="/"/>;
    
}

export default Main_page;