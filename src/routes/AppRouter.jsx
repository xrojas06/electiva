
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Vgb,Home,Servicios,About, Contacto, Login, Signin, Forgot, Glosario,Paraphilia, Its , FemAnatomy} from "../pages";



export function AppRouter ()  {


    return (

        <Router>
            <Routes>
                <Route path='/' element={<Home/>}   />
                <Route path='/Glosario' element={<Glosario/>}/>
                <Route path='/parafilias' element={<Paraphilia/>}/>
                <Route path='/its' element={<Its/>}/>
                <Route path='/anatomiafe' element={<FemAnatomy/>}/>
                <Route path='/vgb' element={<Vgb/>}/>
            </Routes>
        </Router>
    );
};



