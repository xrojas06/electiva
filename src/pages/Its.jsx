import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Definitions, ITSSection } from "../components";


const Its= () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1573209946145-848669b5ef39?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero titulo={'ITS'} subtitulo={' Conoce, Prevén, Vive Saludablemente'}
                 color = 'text-dimWhite mt-32' color2='text-red-300' />

            </div>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth} w-full`}>
                <ITSSection/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Its;