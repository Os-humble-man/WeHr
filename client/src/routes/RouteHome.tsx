import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../components/dashboard/Dashboard'
import Recrutement from '../components/recrutement/Recrutement'
import Schedule from '../components/schedule/Schedule'
import Employe from '../components/employe/Employe'
import Departement from '../components/departement/Departement'


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
