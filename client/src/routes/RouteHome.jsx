import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../components/Dashboard'
import Recrutement from '../components/Recrutement'
import Schedule from '../components/Schedule'
import Employe from '../components/Employe'
import Departement from '../components/Departement'

function RouteHome() {
  return (
      <Routes>
        <Route path="/" element={ <Home />} >
          <Route index element={< Dashboard />} />
          <Route path="Recrutement" element={< Recrutement />} />
          <Route path="Schedule" element={< Schedule />} />
          <Route path='Employe' element={ < Employe />} />
          <Route path='Departement' element={ < Departement /> } />
        </Route>
      </Routes>
  )
}

export default RouteHome
