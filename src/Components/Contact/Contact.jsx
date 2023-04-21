import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import InfoContact from './InfoContact';

const Contact = () => {

    const [loadingForm, setLoadingForm] = useState(false)
    const [successSend, setSuccessSend] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const form = useRef();
    const ref = useRef(null);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoadingForm(true)
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_ID_KEY)
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



    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsActive(true);
                observer.unobserve(entry.target);
            }
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className='contact-section' id='contact-section'>
            <InfoContact>
                <h2 className={`contact-title ${isActive ? 'active' : ''}`}>Vías de contacto</h2>
            </InfoContact>
            <div className={`form-container ${isActive ? 'active' : ''}`}>
                <h2 className={`contact-title ${isActive ? 'active' : ''}`}>Hacenos tu consulta</h2>
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
                        placeholder='Tu consulta'
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