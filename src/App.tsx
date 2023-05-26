import { Route, Router } from 'wouter'
import Login from './routes/Login/Login'
import Register from './routes/register/Register'
import Home from './routes/Home/Home'
import Brokers from './routes/brokers/Brokers'
import Agreements from './routes/agreements/Agreements'
import Accept from './routes/accept/Accept'
import { UserProvider } from './context/userContext'
import Binnacle from './routes/binnacle/Binnacle'

function App() {
  return (
    <UserProvider>
      <Router base='/' >
      <Route path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'><Register /></Route>
      <Route path='/brokers'><Brokers /></Route>
      <Route path='/agreements'><Agreements /></Route>
      <Route path='/accept'><Accept /></Route>
      <Route path='/binnacle'><Binnacle /></Route>
      </Router>
    </UserProvider>
  )
}

export default App
