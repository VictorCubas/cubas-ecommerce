import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";



const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] mt-3 text-gray-300 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
              <Link to='/'>
                  <div className="flex items-center gap-2 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500"
                  >
                    <path
                      d="M9 10.5L9 13.5M12 10.5L12 13.5M15 10.5L15 13.5M7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.2C20 5.0799 20 4.51984 19.782 4.09202C19.5903 3.71569 19.2843 3.40973 18.908 3.21799C18.4802 3 17.9201 3 16.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202C4 4.51984 4 5.0799 4 6.2V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40973 20.2843 4.71569 20.5903 5.09202 20.782C5.51984 21 6.0799 21 7.2 21Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white font-bold text-xl">TICKETPOINT</span>
                </div>
                </Link>
                
                <p className="mb-6 text-gray-400">
                  Tu punto de venta de entradas para los mejores eventos en Paraguay. Conciertos, deportes, teatro y mucho
                  más.
                </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <IoLocationSharp  className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>Av. Mariscal López 1234, Asunción, Paraguay</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p>+595 21 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <CiMail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p>info@ticketpoint.com.py</p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/conciertos" className="hover:text-green-400 transition-colors">
                  Conciertos
                </Link>
              </li>
              <li>
                <Link to="/category/deportes" className="hover:text-green-400 transition-colors">
                  Deportes
                </Link>
              </li>
              <li>
                <Link to="/category/teatros" className="hover:text-green-400 transition-colors">
                  Teatro
                </Link>
              </li>
              <li>
                <Link to="/category/entretenimientos" className="hover:text-green-400 transition-colors">
                  Entretenimiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Mantente informado</h3>
            <p className="mb-4 text-gray-400">
              Suscríbete a nuestro boletín para recibir las últimas noticias y ofertas especiales.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Tu correo electrónico"
                  className="bg-[#252547] border-gray-700 focus:border-green-500 text-white"
                />
                <Button className="bg-green-600 hover:bg-green-700">Suscribir</Button>
              </div>
              <p className="text-xs text-gray-500">
                Al suscribirte, aceptas nuestra{" "}
                <span role='button' className="text-green-500 hover:underline">
                  política de privacidad
                </span>
                .
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Síguenos</h4>
              <div className="flex gap-4">
                <Link
                  to="https://facebook.com"
                  className="bg-[#252547] p-2 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook  className="h-5 w-5" />
                </Link>
                <Link
                  to="https://instagram.com"
                  className="bg-[#252547] p-2 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  to="https://twitter.com"
                  className="bg-[#252547] p-2 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="h-5 w-5" />
                </Link>
                <Link
                  to="https://youtube.com"
                  className="bg-[#252547] p-2 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="YouTube"
                >
                  <FiYoutube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#151525] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} TicketPoint. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <p  role='button' className="text-gray-400 hover:text-green-400 transition-colors">
                Términos y condiciones
              </p>
              <p  role='button' className="text-gray-400 hover:text-green-400 transition-colors">
                Política de privacidad
              </p>
              <p  role='button' className="text-gray-400 hover:text-green-400 transition-colors">
                Política de cookies
              </p>
              <p role='button' className="text-gray-400 hover:text-green-400 transition-colors">
                Política de reembolsos
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer