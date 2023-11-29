import styles from "../style";
import { logo1, rainbow } from "../assets";
import { footer } from "../constants";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import {NavLink} from "react-router-dom";
const Footer = (styles) => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} style={{ backgroundColor: '#a4c6fa' }}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="sm:flex hidden justify-between items-center mt-10 mb-10">
        <img
          src={rainbow}
          alt="hoobank"
          className="w-[100px] h-[72.14px] object-contain mr-10"
        />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">



                  <li

                    className={`font-Heebo font-semibold text-center cursor-pointer text-[22px] text-white mr-20}`}
                  >
                      Un Espacio para el Aprendizaje y la Comprensión en el Mundo de la Sexualidad
                  </li>


          </ul>
      </div>
    </div>

    <div className="w-full sm:flex hidden justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-Heebo font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 .
      </p>
    </div>

    <div className="sm:block md:hidden flex flex-col items-center ">
        <ul className="list-none flex flex-col ml-auto mb-10">
            <li className={`font-Heebo font-semibold text-center cursor-pointer text-[21px] text-white mb-10}`}>
                Un Espacio para el Aprendizaje y la Comprensión en el Mundo de la Sexualidad
            </li>
        </ul>
        <img
            src={rainbow}
            alt="hoobank"
            className="w-[90px] h-[92.14px] mb-10"
        />

        <p className="font-Heebo font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2023 .
        </p>


    </div>


  </section>
);

export default Footer;
