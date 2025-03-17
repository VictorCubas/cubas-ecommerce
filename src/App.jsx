import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ErrorPage } from './components/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <main className="mt-6 pt-5">
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido A categoria'/>}/>
            <Route path='/category/:categoryId/:eventId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </main>


        {/* footer */}
      </BrowserRouter>
    </>
  )
}

export default App
