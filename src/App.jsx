import './App.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, NavLink, Route, RouterProvider, Routes } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Zita from './components/taskOne/Zita';
import Petras from './components/taskOne/Petras';
import Users from './components/Users';
import { zitosVeikla } from './data/data';
import Root from './components/Root';
import { dataloader } from './services/fetchimg';
import Gallery from './components/Gallery';
import TetaZitaVeikia from './components/taskOne/TetaZitaVeikia';
const users = [
  { id: 1, name: "jonas" },
  { id: 2, name: "Petras" },
  { id: 3, name: "Stas" }
]

function App() {
  dataloader()
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root zitosVeikla={zitosVeikla} />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} loader={dataloader} />
      <Route path='tetazita' element={<TetaZitaVeikia zitosVeikla={zitosVeikla} />}>
        <Route path=':id' element={<TetaZitaVeikia zitosVeikla={zitosVeikla} />} />
      </Route>

    </Route>
  ))


  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <BrowserRouter>
    //   <Link to="/">Home</Link> {" "}
    //   <NavLink to={"/about"} className={({isActive})=>(isActive?"active":"s")}>About</NavLink>{" "}
    //   {/* Task one */}
    //   <Link to="/petras">Petras</Link>{" "}
    //   <NavLink to={"/zita"} className={({isActive})=>(isActive?"active":"s")}>Zita</NavLink>{" "}
    //   {/* Task one end */}

    //   {/* <Link to="/users/3">Users</Link>{" "} */}
    //   {/* <Link to="/users/3/kitas">Users</Link>{" "} */}
    //   <br />
    //   {users.map(user=>(
    //     <Link to={`/users/${user.id}`} key={user.id}>{user.name} <br/></Link>
    //   ))}

    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='/about' element={<About />}/>
    //     <Route path='/zita' element={<Zita/>}/>
    //     <Route path='petras' element={<Petras/>}/>
    //     {/* <Route path='users/:id' element={<Users users={users}/>}/> */}
    //     {/* <Route path='users/:id/:kitasroutas' element={<Users/>}/> */}

    //     <Route path='zita/:id' element={<Zita/>}></Route>


    //     <Route path='*' element={<h1>404 page not found</h1>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
