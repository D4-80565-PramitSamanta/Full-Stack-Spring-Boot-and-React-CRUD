import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      


        <NavBar />

          <Routes>
            

          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/adduser' element={<AddUser />}></Route>
          <Route exact path='/edituser/:x' element={<EditUser />}></Route>
          <Route exact path='/viewuser/:x' element={<ViewUser/>}></Route>

          </Routes>









      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
