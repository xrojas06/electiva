// src/components/AnatomiaFemenina.js
import React from 'react';

const AnatomiaFemenina = () => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#ffca59]">
                Explorando la Anatomía Sexual Femenina
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sección de la Vulva */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-[#ffca59]">
                        La Vulva: Fuente de Placer y Conexión
                    </h3>
                    <p className="text-lg text-gray-700 leading-loose">
                        La vulva, que abarca los labios mayores, labios menores, clítoris,
                        uretra y la entrada vaginal, es más que una estructura anatómica.
                        Es la puerta a la intimidad, la fuente de placer y la manifestación
                        de la identidad femenina. Conocer y apreciar la complejidad de la vulva
                        no solo contribuye al bienestar sexual, sino que también promueve una
                        conexión más profunda con la propia sexualidad y emociones.
                    </p>
                    {/* Espacio para la imagen de la vulva */}
                    <img
                        src="https://static.wixstatic.com/media/62b097_7336cdaab09e418c81d50418690d0cc1~mv2.png/v1/fill/w_640,h_578,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/62b097_7336cdaab09e418c81d50418690d0cc1~mv2.png"
                        alt="Vulva"
                        className="w-full h-auto mt-8 rounded-lg shadow-md"
                    />
                </div>

                {/* Sección del Aparato Reproductivo */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-[#ffca59]">
                        Aparato Reproductivo: Creando Vida y Celebrando la Feminidad
                    </h3>
                    <p className="text-lg text-gray-700 leading-loose">
                        El aparato reproductor femenino, compuesto por órganos internos como los ovarios, las trompas de Falopio, el útero y el cuello uterino, junto con los órganos externos que forman la vulva, desempeña un papel crucial en la sexualidad de las mujeres. Además de su función central en la reproducción, este sistema está intrínsecamente vinculado al ciclo menstrual, que regula la liberación de óvulos y la preparación del útero. Más allá de su importancia biológica, el aparato reproductor femenino también contribuye significativamente a la experiencia sexual, ya que incluye estructuras como el clítoris, altamente sensibles y asociadas al placer. Así, la intersección de la reproducción y la sexualidad hace que este sistema sea esencial para la salud integral y el bienestar de las mujeres                    </p>
                    {/* Espacio para la imagen del aparato reproductivo */}
                    <img
                        src="https://publicaciones.webcindario.com/Exe%206%C2%BA/Imagen3.3.png"
                        alt="Aparato Reproductivo"
                        className="w-full h-auto mt-8 rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default AnatomiaFemenina;


