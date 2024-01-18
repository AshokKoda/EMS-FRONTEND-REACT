import './App.css'
import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import ListEmployeesComponent from "./components/ListEmployeesComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element={<ListEmployeesComponent />}></Route>
            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element={<ListEmployeesComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
