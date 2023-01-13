import './App.css'
import './Components/Header/Header.css'
import './Components/Contacto/Contacto.css'
import './Components/QuienesSomos/QuienesSomos.css'
import './Components/Productos/Productos.css'
import './Components/Footer/Footer.css'
import Header from "./Components/Header/Header"
import QuienesSomos from "./Components/QuienesSomos/QuienesSomos"
import Contacto from "./Components/Contacto/Contacto"
import Productos from "./Components/Productos/Productos"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <Quienes-Somos/>
      <Productos/>
      <Contacto/>
      <Footer/>
    </>
  )
}
export default App
