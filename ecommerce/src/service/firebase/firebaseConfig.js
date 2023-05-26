import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyBLov9bfPU2NUezW90sAsQGu9PpQzrQvgw",
  authDomain: "ecommerce-de-camisas.firebaseapp.com",
  projectId: "ecommerce-de-camisas",
  storageBucket: "ecommerce-de-camisas.appspot.com",
  messagingSenderId: "811635325563",
  appId: "1:811635325563:web:fcb49b5bccc6ff8e57c0de"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore (app)
