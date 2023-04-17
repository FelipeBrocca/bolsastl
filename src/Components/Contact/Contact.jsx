import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const [loadingForm, setLoadingForm] = useState(false)
    const [successSend, setSuccessSend] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoadingForm(true)
        emailjs.sendForm('service_fdd65es', 'template_g23bkpq', form.current, '8v7p9kn3ggNSrlgJw')
            .then((result) => {
                setLoadingForm(false)
                if (result.status === 200) {
                    setSuccessSend(true)
                    setTimeout(() => {
                        setSuccessSend(false)
                    }, 2000)
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='contact-section'>
            <h2 className='contact-title'>Dejanos tu consulta</h2>
            <div className='form-container'>
                <form className='form-contact' ref={form} onSubmit={sendEmail}>
                    <input
                        type='text'
                        placeholder='Nombre completo'
                        name='username'
                        required />
                    <input
                        type='email'
                        placeholder='Email'
                        name='useremail'
                        required />
                    <input
                        type="text"
                        placeholder='Asunto'
                        name='subject'
                        required />
                    <textarea
                        name='message'
                        rows="5"
                    />
                    {
                        successSend
                            ? <div className='success-icon-container'>
                                <div className="success-icon">
                                    <span className="checkmark">&#x2713;</span>
                                </div>
                                <p>Enviado con éxito</p>
                            </div>
                            : <button type='submit' className='button-form'>
                                {
                                    loadingForm
                                        ? 'Cargando'
                                        : 'Enviar'
                                }
                            </button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact