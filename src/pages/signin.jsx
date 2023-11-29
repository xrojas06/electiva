import React from "react";
import styles from "../style.js"
import {Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, LogSection, SignSection} from "../components";

const Signin = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div>
            <SignSection/>
        </div>

        <div className={`bg-purpleblue ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>



);

export default Signin;
