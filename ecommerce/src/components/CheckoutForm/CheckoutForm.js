import { useState } from 'react';

    const CheckoutForm = ({onConfirm}) => {
        const [name, SetName] = useState("")
        const [lastName, SetLastName] = useState("")
        const [phone, SetPhone] = useState("")
        const [email, SetEmail] = useState("")
        const [confirmEmail, setConfirmEmail] = useState('');
        const [error, setError] = useState('');

        const handleConfirm = (event) => {
            event.preventDefault();

            if(email !== confirmEmail){
                setError('Error en el email, por favor verifica que ambos campos coincidan.');
                return;
            }else{
            const userData = {
                name, lastName, phone, email, confirmEmail
            }
            onConfirm(userData)}
        }
    return (
        <div className='container principal'>
            <form onSubmit={handleConfirm}>
                <label className='row m-1'>
                    Nombre:
                    <input 
                    type="text"
                    value={name}
                    onChange={({target}) => SetName(target.value)}
                    />
                </label>
                <label className='row m-1'>
                    Apellido:
                    <input 
                    type="text"
                    value={lastName}
                    onChange={({target}) => SetLastName(target.value)}
                    />
                </label>
                <label className='row m-1'>
                    Telefono:
                    <input 
                    type="tel"
                    value={phone}
                    onChange={({target}) => SetPhone(target.value)}
                    />
                </label>
                <label className='row m-1'>
                    E-Mail: 
                    <input 
                    type="email"
                    value={email}
                    onChange={({target}) => SetEmail(target.value)}
                    />
                </label>
                <label className='row m-1'>
                    Confirmar E-Mail: 
                    <input 
                    type="email"
                    value={confirmEmail}
                    onChange={({target}) => setConfirmEmail(target.value)}
                    />
                </label>
                {error && <p className='error'>{error}</p>}
                <div>
                    <button className="boton m-1" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm