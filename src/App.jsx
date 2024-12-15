
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import './index.css'
import store from './utils/store'
import Maincontainer from './components/Maincontainer'
import WatchContainer from './components/WatchContainer'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"/watch",
        element:<WatchContainer/>
      }
    ]
  }
])
function App() {

  return (
    <>
    <Provider store={store}>
      <div className=''>
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
    </>
  )
}

export default App
