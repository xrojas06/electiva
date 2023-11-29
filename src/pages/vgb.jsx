import React from "react";
import styles from "../style.js"
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero } from "../components";


const Vgb = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-cover bg-center ${styles.flexStart}`} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpb2xlbmNpYSUyMGElMjBsYSUyMG11amVyfGVufDB8fDB8fHww')` }}>
            <div className={`${styles.boxWidth}`}>
                <Hero subsubtitulo='Educación + Respeto' texto='Prevención: Un Enfoque Integral contra la Violencia de Género.
                ' color = 'text-dimWhite mt-20' color2='text-orange-400' margint='mt-5'/>

            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-20`}>
            <div className={`${styles.boxWidth}`}>
                <Business/>
            </div>
        </div>

        <div className={`bg-[#a4c6fa]  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default Vgb;