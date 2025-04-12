import { getDocs, doc, getDoc, where, query, collection, addDoc } from 'firebase/firestore';
import { db } from '../service/firebase';


export const getProductsFirebase = (categoryId) => {
    const itemCollection = categoryId 
            ? query(collection(db, 'items'), where('category', '==', categoryId)) 
            : collection(db, 'items');
    return getDocs(itemCollection);    
};

const categories = ['deportes', 'conciertos', 'teatros', 'entretenimientos']

export const getProductByIdFirebase = (categoryId, id) => {
    if(isValidCategory(categoryId)){
        const itemCollection = collection(db, 'items');
        const docRef = doc(itemCollection, id);
        return getDoc(docRef);
    }

    throw new Error('Categoría inválida');
};




// export const addOrderToFibese = () => {

// }


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





// export const uploadToFirebase = () => {
//     const collectionToAdd = collection(db, 'items');
//     productos.map(item => addDoc(collectionToAdd, item));
// };


export const getPurchaseByIdFirebase = (purchaseId) => {
    const orderCollection = collection(db, 'orders');
    const docRef = doc(orderCollection, purchaseId);
    return getDoc(docRef);
};



export const fetchPurchaseById = (fetchFn, purchaseId) => { //fetchFn --> generic name
    /**
     * Agrega un formato a la fecha
     * @param {*} timestamp 
     * @returns la fecha formateada
     */
    const formatDate = (timestamp) => {
      const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
      return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
    };


    return new Promise((resolve, reject) => {
      const fetchData = async () => {
        try {
          const responseDoc = await fetchFn(purchaseId); //generic name
          
          if(responseDoc.exists()){
            const newDate = formatDate(responseDoc.data().date);
            resolve({
              id: responseDoc.id,
              ...responseDoc.data(),
              date: newDate //se formatea el date
              });
          }
          else{
            //producto inexistente
            reject('No existe la compra')
          }
          
        } catch (error) {
          //en caso de que la categorria sea invalida o algun error en el http de firerbase
          reject({
            message: error.message || 'Ocurrio algo inesperado.'
          });
          
        }
      }

      fetchData();
    })
  }
