import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../components/Dashboard/Dashboard'
import Recrutement from '../components/Recrutement/Recrutement'
import Schedule from '../components/Schedule/Schedule'
import Employe from '../components/Employee/Employe'
import Departement from '../components/Departement/Departement'


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
