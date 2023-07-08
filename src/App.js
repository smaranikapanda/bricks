import Home from './components/Home';
import './App.css';
import { Routes,  Route, BrowserRouter } from "react-router-dom"
import Lpackage from './components/landing_package/Lpackage'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog' element={<Blog/>}/> 
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/package' element={<Lpackage/>}/>
       
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
