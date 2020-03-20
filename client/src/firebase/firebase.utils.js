import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDL6BSGfHQcPlhwVemwO_ZlsgPrhCXG16Q" ,
    authDomain: "react-ecommerce-store-d63a9.firebaseapp.com",
    databaseURL: "https://react-ecommerce-store-d63a9.firebaseio.com",
    projectId: "react-ecommerce-store-d63a9",
    storageBucket: "react-ecommerce-store-d63a9.appspot.com",
    messagingSenderId: "506581088209",
    appId: "1:506581088209:web:a52a2960da939bd9b9d2f0",
    measurementId: "G-YYDRH0KY6F"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID 
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get() ;

    if(!snapshot.exists){
        const {displayName , email} = userAuth ;
        const dateCreated = new Date();

        try{
            await userRef.set({ displayName, email, dateCreated, ...additionalData})
        } catch(error){

        }
    }
    return userRef ;
};

export const addProductsAndDocuments = async (productKey , objectsToAdd) => {
    const productRef = firestore.collection(productKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = productRef.doc();
        
        batch.set(newDocRef , obj) ;
    });
    return await batch.commit();
};

export const convertProductSnapshotToMap = (products) => {
    const transformedProduct = products.docs.map(doc => {
        const {title, items} = doc.data() ; 

        return{
            routeName: encodeURI(title.toLowerCase()) ,
            id: doc.id,
            title,
            items
        }
    }) 

    return transformedProduct.reduce((accumulator , product) =>{
        accumulator[product.title.toLowerCase()] = product;
        return accumulator
    } , {})
}

export const getCurrentUser = () =>{
    return new Promise ((resolve , reject) => {
        const unSubscribe = auth.onAuthStateChanged(userAuth => {
            unSubscribe();
            resolve(userAuth)
        } , reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase 