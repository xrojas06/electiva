import React from "react";
import styles from "../style.js"
import { Business, CardDeal,  Footer, Navbar, Stats, Testimonials, Hero, Stats1 } from "../components";

const Servicios = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>


        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = 'Nuestros servicios' texto='Ofrecemos todo tipo de equipos y servicios electronicos para estaciones de peajes.' margintop='mt-20'
                color = 'text-white opacity-80' colo2='text-white opacity-75'/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats1 texto1='Experiencia de pedido personalizada: Tu Visión, Nuestros Servicios'/>
                <CardDeal texto='Productos y servicios' />
                <CardDeal mostrarTexto={true} />
                <CardDeal mostrarTexto={true} />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} m-10`}>
            <div className={` flex items-center justify-center  border-8 border-solid border-primaryred rounded-[15px]`}>
                <button type="button" className={`py-4 px-12 font-Heebo font-semibold text-[20px] text-primaryred bg-white rounded-[10px] ${styles}`}>
                    Ver mas
                </button>
            </div>
        </div>

        <div className={`bg-purpleblue ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Servicios;