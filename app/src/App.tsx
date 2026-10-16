import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Build from './pages/Build'
import Marketplace from './pages/Marketplace'
import Ehr from './pages/Ehr'
import BlankSlate from './pages/BlankSlate'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Talk from './pages/Talk'
import NotFound from './pages/NotFound'

// URLs from the previous site, kept alive so old links and bookmarks still land.
const LEGACY: Record<string, string> = {
  '/demo': '/talk',
  '/platform': '/build',
  '/values': '/about',
  '/products/ehr': '/ehr',
  '/products/crm': '/ehr#crm',
  '/products/outcomes': '/ehr#outcomes',
  '/products/blueiq': '/ehr#blueiq',
  '/for-clinicians': '/ehr',
  '/for-nurses': '/ehr',
  '/for-admissions': '/ehr#crm',
  '/for-executives': '/ehr#outcomes',
  '/for-referral-partners': '/pricing#referral-partners',
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="build" element={<Build />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="ehr" element={<Ehr />} />
        <Route path="blank-slate" element={<BlankSlate />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="talk" element={<Talk />} />
        {Object.entries(LEGACY).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
