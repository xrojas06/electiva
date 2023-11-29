import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Definitions } from "../components";


const Glosario = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-bottom ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1604187350414-5cd124389d93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero texto = 'Desafía Etiquetas y Amplía Horizontes con Nuestro Glosario
                ' color = 'text-dimWhite mt-20' color2='text-red-300' margint={'mt-28 '}/>

            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth} w-full`}>
                <Definitions/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Glosario;