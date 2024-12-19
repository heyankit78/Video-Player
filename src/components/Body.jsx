
import {Sidebar} from './Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body
