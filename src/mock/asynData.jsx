import evento1 from './../assets/evento1.webp';
import evento2 from './../assets/evento2.webp';
import evento3 from './../assets/evento3.webp';
import evento4 from './../assets/evento4.webp';
import evento5 from './../assets/evento5.webp';
import evento6 from './../assets/evento6.jpeg';
import evento7 from './../assets/evento7.png';
import evento8 from './../assets/evento8.png';
import evento9 from './../assets/evento9.png';
import evento10 from './../assets/evento10.png';
import evento11 from './../assets/evento11.png';
import evento12 from './../assets/evento12.png';
import evento13 from './../assets/evento13.jpg';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

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
        name: "Argentina - Brasil",
        price: 1000,
        description: 'Las Eliminatorias Sudamericanas rumbo a la Copa del Mundo 2026',
        place: 'Estado de River Plate',
        stock: 10,
        category: 'deportes',
        date: '04/05/2025',
        image: evento10
    },
    {
        id: '06',
        name: "Festival Asuncion Cumbia",
        price: 1000,
        description: `Damas Gratis con el querido Pablo Lescano, Jean Carlos Centeno, también los queridos Sonora Dinamita, Nestor en Bloque  y los nacionales, 
                    Máximos Qmbieros, Andy y Martin y desde el Festival Buenos Aires Cumbia  Sugar Baby DJ y DJ Pipo.`,
        place: 'Jockey Club',
        stock: 10,
        category: 'conciertos',
        date: '05/04/2025',
        image: evento5
    },
    {
        id: '07',
        name: "Premier Padel P2 Ueno Bank – Asunción 2025",
        price: 1000,
        description: `¡El mejor pádel del mundo llega a Paraguay! Del 19 al 25 de mayo, Asunción se convertirá en el
                    epicentro del pádel internacional con el Premier Padel P2 Ueno Bank.`,
        place: 'SND Arena',
        stock: 10,
        category: 'deportes',
        date: '25/04/2025',
        image: evento6
    },
    {
        id: '08',
        name: "Cenicienta, el musical",
        price: 1000,
        description: `El clasico de siempre contado como nunca`,
        stock: 10,
        category: 'teatros',
        date: '30/11/2025',
        image: evento13
    },
    {
        id: '09',
        name: "Música para volar sinfónico",
        price: 1000,
        description: `Vieja por la obra de Gustavo Cerati`,
        place: 'Auditorio Belgrano',
        stock: 10,
        category: 'conciertos',
        date: '25/04/2025',
        image: evento7
    },
    {
        id: '10',
        name: "La orquesta estable del teatro colóon en el coliseo",
        price: 1000,
        description: `La Orquesta Estable del Teatro Colón, que celebra sus 100 años, ofrecerá un concierto con la dirección musical de Stefano Ranzani`,
        place: 'Teatro Coliseo',
        stock: 10,
        category: 'teatros',
        date: '29/03/2025',
        image: evento8
    },
    {
        id: '11',
        name: "Triuto a Queen",
        price: 1000,
        description: 'Tributo a Queen Master Stroke',
        place: 'Teatro Universitario',
        stock: 10,
        category: 'entretenimientos',
        date: '10/05/2025',
        image: evento11
    },
    {
        id: '12',
        name: "Concurso de K-POP",
        price: 1000,
        description: 'Con Soledad Silveyra, Facundo Mazzei y Jini como jurados, y la conducción de Lizardo Ponce y Majo Martino, el próximo 13 de junio inicia este certamen',
        place: 'Centro Cultural Coreano',
        stock: 10,
        category: 'entretenimientos',
        date: '13/06/2025',
        image: evento12
    },
    {
        id: '13',
        name: "Shen Yun",
        price: 1000,
        description: 'El espectaculo que tiene relacion contigo vida tras vida, lo has  estado esperando',
        place: 'Teatro Opera | Buenos Aires',
        stock: 10,
        category: 'teatro',
        date: '27/03/2025',
        image: evento9
    },
]


export const getProductsFirebase = () => {
    const itemCollection = collection(db, 'items');
    return getDocs(itemCollection);    
};

const categories = ['deportes', 'conciertos', 'teatro', 'entretenimento']

export const getProductByIdFirebase = (categoryId, id) => {
    if(isValidCategory(categoryId)){
        const itemCollection = collection(db, 'items');
        const docRef = doc(itemCollection, id);
        return getDoc(docRef);
    }

    throw new Error('Categoría inválida');
};


const isValidCategory = (categoryId) => {
    return categories.includes(categoryId);
}

// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         let error = false;

//         setTimeout(() => {
//             if(error){
//                 reject('No hay data');
//             }
//             else{
//                 resolve(productos);
//             }
//         }, 3000);
//     });
// };



// export const getProductById = (categoryId, id) => {
    
//     return new Promise((resolve, reject) => {
//         let error = false;

//         setTimeout(() => {
//             if(error){
//                 reject('No hay data');
//             }
//             else{
//                 const event = productos.filter(item => item.category === categoryId && item.id === id.toString() );
//                 resolve(event)
//             }
//         }, 2000);
//     });
// };



