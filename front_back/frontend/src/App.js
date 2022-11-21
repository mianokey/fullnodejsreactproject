import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ShowAllUsers from './components/ShowAllUSers';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';

function App() {

  
  return (
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
             <Route path='/' exact element={""}  />
             <Route path='/showallusers' element={<ShowAllUsers />}  />
             <Route path='/updateuser' element={<UpdateUser/>}  />
             <Route path='/createuser' element={<CreateUser/>}  />
             
        </Routes>
    </BrowserRouter>
    
       
  );
}

export default App;
