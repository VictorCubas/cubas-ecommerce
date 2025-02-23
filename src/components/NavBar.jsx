import CartWidget from "./CartWidget";
import { Button } from "@material-tailwind/react";


const NavBar = () => {
    return (
        <>
        <p className="bg-amber-600">
            HOLA
        </p>

        <Button>Button</Button>;
         {/* <Button color="blue">color blue</Button> */}
            {/* <nav className="navContainer">
                <a className="navLink" href="">
                    <img src="./logo" alt="logo" className="logo" />
                </a>
                <a className="navLink" href="">Nuevos</a>
                <a className="navLink" href="">Mas vendidos</a>
                <a className="navLink" href="">Ofertas</a>

                <CartWidget/>
            </nav> */}
        </>
    )
}

export default NavBar;