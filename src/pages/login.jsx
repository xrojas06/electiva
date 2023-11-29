import React, { useState } from "react";
import styles from "../style.js";
import { Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, LogSection} from "../components";


function Login() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div>
                <LogSection />
            </div>

            <div className={`bg-purpleblue ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Login;


