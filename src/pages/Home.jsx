import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero } from "../components";


const Home = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1576073719676-aa95576db207?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = 'Descubre ' subsubtitulo='la Sexualidad con Sentido' texto='Conexión, Educación y Respeto en Cada Aspecto de tu Vida Sexual.
                ' color = 'text-dimWhite mt-20' color2='text-red-300' margint='mt-5'/>

            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth}`}>
                <CardDeal texto='Algunas Temáticas'/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Home;