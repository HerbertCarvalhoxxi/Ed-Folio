import './home.css'
import { Link, Navigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import Img from '../../assets/ed3.jpg'
import ImgSlider from '../../assets/edcadeira.jpg'
import ImgPose from '../../assets/edpose.jpg'
import ImgBolsos from '../../assets/edbolsos.jpg'
import Typed from 'typed.js';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import P1 from '../../assets/project1.jpg'
import P2 from '../../assets/project2.jpg'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import JustLogo from '../../assets/justlogo.png'
import Curriculo from '../../assets/curriculo.pdf'
import Proj1 from '../../assets/Proj1.pdf'
import Proj2 from '../../assets/Proj2.pdf'


register()

export default function Home() {

    const navigate = useNavigate()

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        const showImg = document.querySelector(".featured-image")
        const iconH3 = document.querySelector(".iconH3")
        const iconsLink = document.querySelector(".linkArea")

        menu.classList.toggle('open');
        icon.classList.toggle('open');
        showImg.classList.toggle('open')
        iconH3.classList.toggle('open')
        iconsLink.classList.toggle('open')

    }

    function copyLink(){
        navigator.clipboard.writeText('psicologo.edinaldoalves@gmail.com')
        toast.success('Email Copiado Com Sucesso')
      }

      function downloadPDF() {
        
        var link = document.createElement('a');
        link.href = Curriculo
        link.download = 'EdCurriculo.pdf'; 
        link.click(); 
      }

      function downloadP1() {
        
        var link = document.createElement('a');
        link.href = Proj1
        link.download = 'Projeto1.pdf'; 
        link.click(); 
      }

      function downloadP2() {
        
        var link = document.createElement('a');
        link.href = Proj2
        link.download = 'Projeto2.pdf'; 
        link.click(); 
      }


    useEffect(() => {
        const options = {
            strings: ["Olá, me chamo Edinaldo Alves!", "Sou Psicólogo", "Abordagem Psicanalítica"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000
        };

        const typed = new Typed(".typedText", options);
        return () => {
            typed.destroy();
        };
    }, [])

    return (
        <>
            <div className='containerNav'>
                <nav id="desktop-nav">
                    <div className="logo">
                        <img src={ Logo } alt="logo marca" />
                    </div>
                    <div>
                        <ul className="nav-links">
                            <li><a href="#init">Página Inicial</a></li>
                            <li><a href="#about">Sobre Mim</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><Link to="/Formulario">Fale Comigo</Link></li>
                        </ul>
                    </div>
                </nav>
                <nav id="hamburger-nav">
                    <div className="logo">
                        <img src={ JustLogo } alt="logo marca" />
                    </div>
                    <div className="hamburger-menu">
                        <div className="hamburger-icon" onClick={() => toggleMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menu-links">
                            <li><a href="#init" onClick={() => toggleMenu()}>Página Inicial</a></li>
                            <li><a href="#about" onClick={() => toggleMenu()}>Sobre mim</a></li>
                            <li><a href="#projects" onClick={() => toggleMenu()}>Projetos</a></li>
                            <li><Link to="/Formulario">Fale Comigo</Link></li>
                        </div>
                    </div>
                </nav>
            </div>
            <section className='homeContainer' id='init'>
                <div className='textSide'>
                    <h1><span className='typedText'></span></h1>
                    <h3 className='iconH3'>Psicólogo <ion-icon name="school-outline" size='large'></ion-icon></h3>
                    <span></span>
                    <div className='buttonArea'>
                        <Link className='linkForm' to='/formulario'>Fale Comigo!</Link>
                        <a className='linkTwo' onClick={()=>downloadPDF()}>Meu Currículo</a>
                    </div>
                    <div className='linkArea'>
                        <ion-icon name="logo-linkedin" onClick={() => window.open('')}></ion-icon>
                        <ion-icon name="logo-instagram" onClick={() => {window.open('https://www.instagram.com/psi.edinaldoalves/') }}></ion-icon>
                        <ion-icon name="mail-outline" onClick={() => {copyLink()}}></ion-icon>
                        <ion-icon name="newspaper-outline" onClick={() => {navigate('/Formulario')}}></ion-icon>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src={Img} alt="avatar" />
                    </div>
                </div>
            </section>
            <h1 className='aboutMe'>Sobre Mim</h1>
            <section className='aboutContainer' id='about'>
                <Swiper className='sliderSide' modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide><img src={ImgPose} alt="slider" /></SwiperSlide>
                    <SwiperSlide><img src={ImgSlider} alt='slider' /></SwiperSlide>
                    <SwiperSlide><img src={ImgBolsos} alt="slider" /></SwiperSlide>
                </Swiper>
                <div className='aboutSide'>
                    <div className='aboutBox'>
                        <h1 className='titleBox'>Experiência <ion-icon name="eye-outline"></ion-icon></h1>
                        <p>Experiência em psicologia clínica, atuei em estágios atendendo crianças, adolescentes e adultos, com demandas de ansiedade, relacionamento e autoestima. 
                        Ao longo da minha formação tive práticas em instituições privadas com estudos teóricos ao que diz respeito a Psicologia Institucional, estágio em Projeto Social relacionado a ONGS de João Pessoa, práticas de estágio referentes ao estudo de Psicologia de grupos, estágio em uma empresa privada de Hotelaria com ênfase na Psicologia e Trabalho. Participei da Liga Acadêmica de Psicanálise (LAEP), monitor da disciplina de Teorias da Personalidade (enquanto discente).</p>
                    </div>
                    <div className='aboutBox'>
                        <h1 className='titleBox'>Formação <ion-icon name="school-outline"></ion-icon></h1>
                        <p>Bacharel em Psicologia pelo Centro Universitário de João Pessoa - Unipê (2023).<br/>
                        Formação em Técnico em Enfermagem pela Escola Técnica Estadual de Saúde Professora Clóris Torres de Oliveira, Sapé - PB (2017).
                        </p>
                    </div>
                </div>
            </section>
            <h1 className='aboutMe'>Projetos</h1>
            <section className='projects' id='projects'>
                <div className='projectsBox' onClick={()=> downloadP1()} >
                    <img src={P1} alt='projeto 1' />
                    <p className='titleProjects'>A Síndrome do Burnout no Divã</p>
                </div>
                <div className='projectsBox' onClick={()=> downloadP2()} >
                    <img src={P2} alt='projeto 2' />
                    <p className='titleProjects'>Motivação e Resiliência: A Arte de Reinventar-se em Meio as  Tecnologias</p>
                </div>
            </section>
            <section className='links'>
                <div className="linksContainer">
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
        </>
    )
}