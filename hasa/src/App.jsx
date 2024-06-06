import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componenets/Home'
import aos from 'aos';
import 'aos/dist/aos.js' 
import 'aos/dist/aos.css'
import AboutUs from './componenets/AboutUs'

function App() {
  const [component, setComponenet] = useState (<Home/>)


  function setMenu(menu) {
    switch(menu){
      case 'home': {
        setComponenet(<Home/>);
        break;
      }
      case 'AboutUs': {
        setComponenet(<AboutUs/>);
        break;
      }
    }
  }

  useEffect(()=>{
    aos.init({
      duration:3000
    })
  },[])
  

  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={reactLogo}></img>
    <a className="navbar-brand" href="#"></a>
    <span>Hasaranga</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item btn">
          <a className="nav-link active" aria-current="page" 
          onClick={() => {setMenu('home')}
          }><b>Home</b></a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" onClick={() => {setMenu('AboutUs')}}><b>About</b></a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#"><b>Contact</b></a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#"><b>Shop</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{component}

</div>
  )
}

export default App
