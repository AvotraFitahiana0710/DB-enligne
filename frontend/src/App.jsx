import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function Logout() {
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
