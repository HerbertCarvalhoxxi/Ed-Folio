import { Link } from 'react-router-dom'
import FormImg from '../../assets/formimgg.svg'
import './form.css'
import {  useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Form(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xzqxlm4', 'template_nlaw73v', form.current, {
        publicKey: 'YMXeICmxLMCeymdrq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Mensagem Enviada Com Sucesso! Enviarei Um Email Resposta Assim Que Possível <3')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Houve Um Erro! Verifique Suas Credenciais Ou Tente Novamente Mais Tarde')
        },
      );
    }

    return(
        <div className='bodyContainer'>
        <div className='linkButton'>
          <Link to='/' className='Link'>Voltar</Link>
        </div>  
            <div className='formContainer'>
                <div className='imgSide'>
                    <img src={FormImg} alt='imagem'/>
                </div>
                <form className='formArea' ref={form} onSubmit={sendEmail}>
                    <h1>Fale Comigo!</h1>
                    <p>Dúvidas, Propostas ou Agendamentos</p>
                    <label htmlFor="name">Como posso te chamar?</label>
                    <input type='text' name='user_name' id='name' placeholder='Digite seu nome' required/>
                    <label htmlFor='age'>Qual sua idade atual?</label>
                    <input type='number' id='age' name='user_age' placeholder='Digite sua idade' required/>
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name='user_phone' pattern="[0-9]{2}[0-9]{9}" placeholder='83991908988' />
                    <label htmlFor='email'>Email para contato</label>
                    <input type='email' id='email' placeholder='email@email.com' name='user_email' required/>
                    <label htmlFor='textarea'>Sua mensagem</label>
                    <textarea id='textarea' name='user_message'required/>
                    <div className='button'>
                        <button type='submit'>Enviar</button>
                    </div>    
                </form>
            </div>
        </div> 
    )
}