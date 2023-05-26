import { db } from "../../service/firebase/firebaseConfig"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const Checkout = () => {

    const [orderId, setOrderId] = useState("")
    const { cart, total, clearCart } = useContext(CartContext)
    const [error, setError] = useState('');

    const createOrder = async ({ name, lastName, phone, email, confirmEmail }) => {
        try {
            const orderTotal = total()
            const objOrder = {
                buyer: {
                    name, lastName, phone, email, confirmEmail
                },
                items: cart,
                total: orderTotal,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outofStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, "Productos")
            const productsAddedfromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            const { docs } = productsAddedfromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outofStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outofStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                setError('Hay productos fuera de stock');
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (orderId) {
        return <h1 className='container principal'>El id de su orden es :{orderId}</h1>
    }

    return (
        <div>
            <cart />
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
            {error && <p className='error'>{error}</p>}
        </div>
    )
}

export default Checkout