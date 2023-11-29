// Parafilias.js
import React, { useState } from 'react';

const parafiliasData = [
    {
        id: 1,
        title: 'Vorarefilia',
        definition: 'La vorarefilia es una parafilia que implica el deseo de ser comido o de comer a otra persona.',
        url: 'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        title: 'Acrotomofilia',
        definition: 'La acrotomofilia es una parafilia en la que se experimenta atracción sexual hacia personas amputadas o con extremidades discapacitadas.',
        url: 'https://images.unsplash.com/photo-1446900499501-9328b6a46c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        title: 'Formicofilia',
        definition: 'La formicofilia es una parafilia que implica el placer sexual al tener insectos u otros organismos pequeños sobre el cuerpo.',
        url:'https://images.unsplash.com/photo-1509967733342-437077d8e41a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        title: 'Eproctofilia',
        definition: 'La eproctofilia es una parafilia en la que se obtiene placer sexual a través de los pedos o flatulencias.',
        url:'https://imagenes.muyinteresante.es/files/article_social//uploads/2022/10/13/6347bdc05b162.jpeg'
    },
    {
        id: 5,
        title: 'Hematolagnia',
        definition: 'La hematolagnia es una parafilia que involucra el placer sexual al ver o ingerir sangre.',
        url:'https://images.unsplash.com/photo-1568065219398-8f9c0bde728d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        title: 'Necrofilia',
        definition: 'La necrofilia es una parafilia que implica la atracción sexual hacia los cadáveres.',
        url:'https://images.unsplash.com/photo-1598983870677-01e066a0b901?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNxdWVsZXRvfGVufDB8fDB8fHwy'
    },
    {
        id: 7,
        title: 'Urofilia',
        definition: 'La urofilia es una parafilia que implica el placer sexual al observar o participar en actividades relacionadas con la orina.',
        url:'https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        title: 'Autonepiofilia',
        definition: 'La autonepiofilia es una parafilia que implica el deseo de ser tratado como un bebé o experimentar la excitación al actuar como un bebé.',
        url:'https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        title: 'Zoofilia',
        definition: 'La zoofilia es una parafilia que implica la atracción sexual hacia animales.',
        url:'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1hbHN8ZW58MHx8MHx8fDI%3D'
    },
];

const ParafiliaCard = ({ parafilia, onClick }) => (
    <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex justify-center">
        <div className="border rounded-md overflow-hidden cursor-pointer max-w-xs" onClick={() => onClick(parafilia)}>
            <img src={parafilia.url} alt={parafilia.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{parafilia.title}</h3>
            </div>
        </div>
    </div>
);

const ParaphiliaList = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (parafilia) => {
        setModalContent(parafilia);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
            {parafiliasData.map((parafilia) => (
                <ParafiliaCard key={parafilia.id} parafilia={parafilia} onClick={openModal} />
            ))}

            {modalContent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 max-w-2xl rounded-md">
                        <h2 className="text-xl font-semibold mb-4">{modalContent.title}</h2>
                        <p>{modalContent.definition}</p>
                        <button className="mt-4 p-2 bg-blue-500 text-white rounded-md" onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ParaphiliaList;
