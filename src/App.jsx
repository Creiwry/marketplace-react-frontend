import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { PrivateRoute } from './Components/PrivateRoute'
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'
import { Footer}  from './Components/Footer'
import { Register } from './Pages/Register'
import { LogIn } from './Pages/Login'
import { CheckoutForm } from './Components/CheckoutForm'
import { Return } from './Components/Return'

function App() {
  return (
    <>
      <Router>
        <div className="relative bg-gray-300 dark:bg-black flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
          <main className="flex flex-col flex-1 p-4">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<LogIn />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/return" element={<Return />} />
              <Route path='/me' element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
