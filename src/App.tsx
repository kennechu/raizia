import { Route } from 'wouter'
import Login from './routes/login/Login'
import Register from './routes/register/Register'
import Home from './routes/home/Home'
import Brokers from './routes/brokers/Brokers'
import Agreements from './routes/agreements/Agreements'
import './App.css'
import Accept from './routes/accept/Accept'
import { UserProvider } from './context/userContext'
import Binnacle from './routes/binnacle/Binnacle'

function App() {
  return (
    <UserProvider>
      <Route path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'><Register /></Route>
      <Route path='/brokers'><Brokers /></Route>
      <Route path='/agreements'><Agreements /></Route>
      <Route path='/accept'><Accept /></Route>
      <Route path='/binnacle'><Binnacle /></Route>
    </UserProvider>
  )
}

export default App
