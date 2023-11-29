import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import React from "react";

const CardDeal = (props) => (
  <section className={layout.sectionInfo}>

      {!props.mostrarTexto && (<div className={layout.sectionInfo}>
          <h2 className={`font-Heebo font-semibold xs:text-[40px] text-[30px] text-newblue1 xs:leading-[58.8px] leading-[66.8px] w-full mb-2 text-center ${props.ml}`} >
              {props.texto}
          </h2>

      </div>)}
        <div className={`flex md:flex-row flex-col sm:pt-6 pt-6 justify-between xs:space-x-10 `}>
            <div className="flex">
                <div className="max-w-sm rounded overflow-hidden shadow-lg xs:mb-0 mb-10 mr-10">
                    <img
                        src="https://images.unsplash.com/photo-1533406494543-e6cf6430f44a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"
                        className="w-full h-auto"
                    />

                    <div className="px-6 py-4 mb-10">
                        <div className="font-bold text-xl mb-2">Glosario de diversidad</div>
                        <p className="text-gray-700 text-base">
                            Explora nuestro Glosario con términos clave relacionados con la diversidad sexual, de género y características sexuales. Te invitamos a sumergirte en un recurso informativo que celebra la riqueza de la diversidad.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg xs:mb-0 mb-10 mr-10">
                    <img
                        src="https://images.unsplash.com/photo-1573208957999-4f1377160316?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"
                        className="w-full h-auto"
                    />

                    <div className="px-6 py-4 mb-10">
                        <div className="font-bold text-xl mb-2">Prácticas seguras</div>
                        <p className="text-gray-700 text-base">
                            Explora prácticas sexuales seguras con nuestra guía informativa. Desde la importancia del uso correcto del condón masculino hasta la versatilidad del condón femenino, te ofrecemos información detallada sobre la prevención de infecciones de transmisión sexual (ITS).                         </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg xs:mb-0 mb-10">
                    <img
                        src="https://images.unsplash.com/photo-1531243348611-0fef265d4559?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"
                        className="w-auto h-auto"
                    />

                    <div className="px-6 py-4 mb-10">
                        <div className="font-bold text-xl mb-2">Parafilias, Cibersexo y Disfunciones Sexuales (PCDS)</div>
                        <p className="text-gray-700 text-base">
                            Adéntrate en el fascinante mundo de las Parafilias, el Cibersexo y las Disfunciones Sexuales (PCDS). Nuestra plataforma aborda estos temas con sensibilidad, proporcionando información compasiva sobre aspectos menos convencionales de la sexualidad.
                        </p>
                    </div>
                </div>
            </div>

        </div>

      {/*
      //<div className={layout.sectionImg}>
        //  <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      // </div> */}

  </section>
);

export default CardDeal;
