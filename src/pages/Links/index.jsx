import { Link } from "react-router-dom" 
import Img from '../../assets/ed3.jpg'
import './links.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Links(){

    function copyLink(){
        navigator.clipboard.writeText('psicologo.edinaldoalves@gmail.com')
        toast.success('Email Copiado Com Sucesso')
      }

    return(
        <section className='links' id='contacts'>
                <div className="linksContainer2">
                    <p className="section__text__p1">Se interessou?</p>
                    <h1 className="titleLinks">Fale Comigo</h1>
                    <img src={Img} alt="imagem de perfil" />
                    <p>@psi.edinaldoalves</p>
                    <div className='linksTree'>
                        <Link to='/Formulario'>Enviar Mensagem <ion-icon name="arrow-redo-outline"></ion-icon></Link>
                        <a onClick={()=> copyLink()}>Gmail<ion-icon name="mail-outline"></ion-icon></a>
                        <a onClick={() => window.open('https://wa.me/558394070988/')}>WhatsApp <ion-icon name="logo-whatsapp"></ion-icon></a>
                        <a onClick={() => window.open('https://www.linkedin.com/in/edinaldo-alves-32a7952b4/')}>LinkedIn <ion-icon name="logo-linkedin"></ion-icon></a>
                        <a onClick={() => window.open('https://www.instagram.com/psi.edinaldoalves/')}>Instagram<ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </section>
    )
}