import './App.css';
import Display from './Components/Display';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import LazyLoading from './Components/Lazyloading';
import Loading from './Components/common/Loading';
// import dashboard from './pages/dashboard';

import Navbar from './Components/common/Navbar';
import { lazy,Suspense } from 'react';

const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const Store=lazy(()=>import('./pages/Store'))
const Lazy=lazy(()=>import('./pages/Lazy'))
const Login=lazy(()=>import('./pages/Login'))
const Dashboard=lazy(()=>import('./pages/dashboard'))
//this process is called lazy loading routes by this we can decrease loading time

function App() {
  return (
  <div>
    <div>
      <Suspense fallback={<Loading/>}>
        <Router>
            <Navbar/>

            <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/store" element={<Store/>}/>
              <Route path="/lazy" element={<Lazy/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>



            </Routes>

        </Router>

      </Suspense>
      
      
    </div>
   
    
  </div>
  );
}

export default App;
