import './App.css'
import { Outlet } from 'react-router'

import ClientLayout from './components/ClientLayout.jsx'
import AdminLayout from './components/AdminLayout.jsx'

function App() {
  return (
    <>
    <ClientLayout />
    {/* <AdminLayout /> */}
    <main>
    <Outlet/>
    </main>
    <footer className='text-matteBlack font-SF-Light'>Footer Navbar</footer>
    </>
  )
}

export default App
