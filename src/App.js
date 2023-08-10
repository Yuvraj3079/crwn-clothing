import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>This is Navigation</h1>
      </div>
      <Outlet/>
    </div>
  )
}

const Shop = () =>{
  return (
    <div>
    <h1>I am shop page</h1>
    </div>
    
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );  
};

export default App;
