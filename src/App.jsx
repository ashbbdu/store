import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './layout/AuthLayout'

function App() {

  return (
       <>
      <Routes>
          <Route path='/' element={<AuthLayout />} />
          <Route path='/signup' element={<AuthLayout />} />
          <Route path='/verify-account' element={<AuthLayout />} />
      </Routes>
       </>
  )
}

export default App
