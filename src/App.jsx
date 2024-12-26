
import { Routes,Route}  from 'react-router-dom'

import About from './component/About'
import Contact from './component/Contact'
import './index.css'
import Home from './component/Home'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import PressRelease from './component/layout/PressRelease'
import Brand from './component/layout/Brand'
import Carrers from './component/layout/Carrers'
import Ourteam from './component/layout/Ourteam'

function App() {
  return (
<>
<Header/>

<Routes>
<Route  path='/' element= {<Home/>} />
<Route path='/About' element = {<About/>} />
<Route path='/contact' element = {<Contact/>} />
  
<Route  path='/Brand' element= {<Brand/>} />
<Route  path='/Carrers' element= {<Carrers/>} />
<Route  path='/Ourteam' element= {<Ourteam/>} />
<Route  path='/PressRelease' element= {<PressRelease/>} />

</Routes>


<Footer/>

</>

  )
}

export default App
