import evento1 from './../assets/evento1.webp';
import evento2 from './../assets/evento2.webp';
import evento3 from './../assets/evento3.webp';
import evento4 from './../assets/evento4.webp';

const productos = [
    {
        id: '01',
        name: "Rock Fest Vol 3",
        price: 1000,
        description: 'Complejo Deportivo Poyos',
        place: 'Complejo Deportivo Poyos',
        stock: 10,
        category: 'conciertos',
        date: '04/05/2025',
        image: evento1
    },
    {
        id: '02',
        name: "Paraguay vs Chile",
        price: 1000,
        description: 'Partido por la date 13 de las Eliminatorias Sudamericanas',
        place: 'Estadio Defensores del Chaco',
        stock: 10,
        category: 'deportes',
        date: '20/03/2025',
        image: evento2
    },
    {
        id: '03',
        name: "JULI BELLESE",
        price: 1000,
        description: 'Teatro Latino',
        place: 'Teatro Latino',
        stock: 10,
        category: 'teatros',
        date: '28/03/2025',
        image: evento3
    },
    {
        id: '04',
        name: "La Supercopa Internacional",
        price: 1000,
        description: 'Segunda Edición, saldrá a escena con dos protagonistas pesados! River y Talleres se verán las caras en busca de un nuevo título, en una final.',
        place: 'La Nueva Olla',
        stock: 10,
        category: 'deportes',
        date: '28/03/2025',
        image: evento4
    },
    {
        id: '05',
        name: "Rock Fest Vol 3",
        price: 1000,
        description: 'Complejo Deportivo Poyos',
        place: 'Complejo Deportivo Poyos',
        stock: 10,
        category: 'conciertos',
        date: '04/05/2025',
        image: evento1
    },
    {
        id: '06',
        name: "Paraguay vs Chile",
        price: 1000,
        description: 'Partido por la date 13 de las Eliminatorias Sudamericanas',
        place: 'Estadio Defensores del Chaco',
        stock: 10,
        category: 'deportes',
        date: '20/03/2025',
        image: evento2
    },
    {
        id: '07',
        name: "JULI BELLESE",
        price: 1000,
        description: 'Teatro Latino',
        place: 'Teatro Latino',
        stock: 10,
        category: 'teatros',
        date: '28/03/2025',
        image: evento3
    },
    {
        id: '08',
        name: "La Supercopa Internacional",
        price: 1000,
        description: 'Segunda Edición, saldrá a escena con dos protagonistas pesados! River y Talleres se verán las caras en busca de un nuevo título, en una final.',
        place: 'La Nueva Olla',
        stock: 10,
        category: 'deportes',
        date: '28/03/2025',
        image: evento4
    },
    {
        id: '09',
        name: "Rock Fest Vol 3",
        price: 1000,
        description: 'Complejo Deportivo Poyos',
        place: 'Complejo Deportivo Poyos',
        stock: 10,
        category: 'conciertos',
        date: '04/05/2025',
        image: evento1
    },
    {
        id: '10',
        name: "Paraguay vs Chile",
        price: 1000,
        description: 'Partido por la date 13 de las Eliminatorias Sudamericanas',
        place: 'Estadio Defensores del Chaco',
        stock: 10,
        category: 'deportes',
        date: '20/03/2025',
        image: evento2
    },
    {
        id: '11',
        name: "JULI BELLESE",
        price: 1000,
        description: 'Teatro Latino',
        place: 'Teatro Latino',
        stock: 10,
        category: 'teatro',
        date: '28/03/2025',
        image: evento3
    },
    {
        id: '12',
        name: "La Supercopa Internacional",
        price: 1000,
        description: 'Segunda Edición, saldrá a escena con dos protagonistas pesados! River y Talleres se verán las caras en busca de un nuevo título, en una final.',
        place: 'La Nueva Olla',
        stock: 10,
        category: 'deportes',
        date: '28/03/2025',
        image: evento4
    },
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false;

        setTimeout(() => {
            if(error){
                reject('No hay data');
            }
            else{
                resolve(productos);
            }
        }, 3000);
    });
};

export const getProductById = (categoryId, id) => {
    
    return new Promise((resolve, reject) => {
        let error = false;

        setTimeout(() => {
            if(error){
                reject('No hay data');
            }
            else{
                const event = productos.filter(item => item.category === categoryId && item.id === id.toString() );
                resolve(event)
            }
        }, 2000);
    });
};