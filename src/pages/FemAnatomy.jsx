import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Definitions, ParaphiliaList, AnatomiaFemenina } from "../components";


const FemAnatomy = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-bottom ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1568383245703-b6fccedeefba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = 'Anatomia sexual femenina ' subsubtitulo='El Camino hacia el Placer Empieza con el Conocimiento'
                      color = 'text-dimWhite mt-20' color2='text-[#ffca59]'/>

            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth} w-full`}>
                <AnatomiaFemenina/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default FemAnatomy;