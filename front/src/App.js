import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      


        <NavBar />

          <Routes>
            

          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/adduser' element={<AddUser />}></Route>
          <Route exact path='/edituser/:x' element={<EditUser />}></Route>


          </Routes>









      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
