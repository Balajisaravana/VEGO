import { createRouter } from "./Router"
import { RouterProvider } from "react-router-dom"
import {AppProvider} from '@/app/Provider'


const AppRouter = () => {
  const router = createRouter()
  return <RouterProvider router={router}/>
}
function App() {


  return (

  <AppProvider>
    <AppRouter/>
  </AppProvider>

   
    
  )
}

export default App
