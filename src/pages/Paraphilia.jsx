import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Definitions, ParaphiliaList } from "../components";


const Paraphilia = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-bottom ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1507070491081-c86dc15d6e12?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo = 'Desafiando estigmas, ' subsubtitulo=' construyendo comprensión' texto='Un espacio seguro para aprender sobre parafilias y derribar los mitos que rodean a estas expresiones sexuales
                ' color = 'text-dimWhite mt-20' color2='text-blue-300' margint={'mt-8 '}/>

            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth} w-full`}>
                <Stats/>
                <ParaphiliaList/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Paraphilia;