import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ErrorPage } from './components/ErrorPage'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import CheckoutFom from './components/CheckoutFom'
import ToastCheckoutVacio from './components/ToastCheckoutVacio'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>

          <main className="mt-6 pt-5 min-h-screen">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenido a tu punto de venta de entradas'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido A categoria'/>}/>
              <Route path='/category/:categoryId/:eventId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartContainer />}/>
              <Route path='/checkout' element={<CheckoutFom />}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
          </main>

          <ToastCheckoutVacio />
          <Footer />


        </CartContextProvider>
        {/* footer */}
      </BrowserRouter>
    </>
  )
}

export default App
