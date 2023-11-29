import React from 'react';
import { FaInfoCircle, FaComments } from 'react-icons/fa';
import { IoIosWarning } from "react-icons/io";

const ITSSection = () => {
    return (
        <div className=" py-12 ">
            <div className="container mx-auto">

                {/* Definición de ITS */}
                <div className="bg-red-100 p-6 rounded-lg shadow-md mb-8 border">
                    <h3 className="text-xl font-semibold mb-4">
                        <FaInfoCircle className="mr-2 inline text-red-300" />
                        Definición de ITS
                    </h3>
                    <p className="my-5 text-justify">
                        Las Infecciones de Transmisión Sexual (ITS) son enfermedades causadas por microorganismos como bacterias,
                        virus, protozoos u hongos que se transmiten de una persona a otra durante el contacto sexual. Estas
                        infecciones pueden afectar los genitales, la boca o el recto, y algunas también pueden transmitirse de madre
                        a hijo durante el embarazo o el parto.
                    </p>
                    <p className="my-5 text-justify">
                        Ejemplos comunes de ITS incluyen la sífilis, la gonorrea, la clamidia, el VIH, el herpes genital, las
                        verrugas genitales y la tricomoniasis, entre otras. Es fundamental tomar medidas preventivas, como el uso
                        de condones, la realización de pruebas de detección regular y mantener relaciones sexuales seguras, para
                        reducir el riesgo de contraer o transmitir ITS. El diagnóstico y tratamiento tempranos son esenciales para
                        prevenir complicaciones a largo plazo y reducir la propagación de estas infecciones.
                    </p>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8 border">
                    <h3 className="flex flex-row items-center font-semibold mb-4">
                        <IoIosWarning className="mr-2 inline text-blue-500" />
                        Prevención desde el acto sexual
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-blue-400 text-white">
                            <th className="px-4 py-2 rounded-tl-lg">Método</th>
                            <th className="px-4 py-2 rounded-tr-lg">Descripción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2">Condón Masculino</td>
                            <td className="border px-4 py-2">El condón masculino es un dispositivo de barrera que se coloca sobre el pene erecto antes de la actividad sexual para prevenir el contacto directo entre los genitales y reducir el riesgo de transmisión de Infecciones de Transmisión Sexual (ITS) y embarazos no deseados. Está hecho generalmente de látex o poliuretano y actúa como una barrera física durante las relaciones sexuales.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Condón Femenino</td>
                            <td className="border px-4 py-2">El condón femenino es un dispositivo de barrera diseñado para ser utilizado por las mujeres durante las relaciones sexuales. Se inserta en la vagina antes del acto sexual para prevenir el contacto directo entre los genitales y reducir el riesgo de ITS y embarazos no deseados. Está hecho de poliuretano o nitrilo y proporciona una opción de protección controlada por la mujer.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Barrera Bucal</td>
                            <td className="border px-4 py-2">El dental dam, también conocido como barrera bucal, es una lámina delgada de látex o poliuretano que se utiliza como barrera durante el sexo oral. Se coloca sobre la vulva o el ano para prevenir el contacto directo con la boca y reducir el riesgo de transmisión de ITS. Proporciona una capa de protección entre la boca y los genitales.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Dedal</td>
                            <td className="border px-4 py-2">El dedal, o finger cot en inglés, es un pequeño dispositivo similar a un dedal que se coloca en un dedo para proporcionar protección durante la exploración íntima o el contacto manual. Puede ser utilizado como una barrera para reducir el riesgo de transmisión de infecciones cuando se realizan actividades sexuales manuales.</td>
                        </tr>
                        {/* Agrega más filas según sea necesario */}
                        </tbody>
                    </table>
                </div>

                {/* Cómo hablarlo con la pareja */}
                <div className="bg-green-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                        <FaComments className="mr-2 inline text-green-500" />
                        Cómo hablarlo
                    </h3>
                    <p className="my-5 text-justify">
                        Cuando se trata de hablar con las parejas sexuales sobre la importancia de la protección y la salud
                        sexual, la comunicación abierta y honesta es fundamental. Iniciar una conversación sobre el uso de métodos
                        de barrera, como condones masculinos o femeninos, barreras bucales y otros dispositivos de prevención de
                        Infecciones de Transmisión Sexual (ITS), puede ser un paso clave para asegurar la salud y bienestar de
                        ambos. Es crucial destacar que el uso de estos métodos no solo protege contra embarazos no deseados, sino
                        también contra la transmisión de ITS.
                    </p>
                    <p className="mt-5 text-justify">
                        Abordar este tema de manera positiva, enfatizando el cuidado mutuo y el respeto por la salud sexual de
                        ambos, puede contribuir a construir una base sólida de confianza y entendimiento en la relación. Además,
                        compartir información sobre las prácticas de prevención y la importancia de realizarse pruebas periódicas
                        puede fomentar una cultura de responsabilidad compartida en el ámbito de la salud sexual. La apertura para
                        discutir estos temas promueve la toma de decisiones informada y ayuda a crear un entorno donde el respeto y
                        el cuidado mutuo son prioridad.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ITSSection;




