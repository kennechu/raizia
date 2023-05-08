import { Route } from 'wouter'
import Login from './routes/Login/Login'
import Register from './routes/register/Register'
import Home from './routes/Home/Home'
import './App.css'

function App() {
  return (
    <>
      <Route path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'><Register /></Route>
    </>
  )
}

export default App
