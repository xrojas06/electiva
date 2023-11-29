import React from 'react';
import {definitions} from "../constants/index.js";
import '../index.css'
const Definitions = () => {

    return (
        <div className="w-full mx-auto mt-8">
            <dl className="grid grid-cols-1 gap-4">
                {definitions.map((termino) => (
                    <div key={termino.id} className="text-gradient shadow-md rounded-md p-10">
                        <dt className="text-xl font-semibold text-gray-700 mb-5">{termino.title}</dt>
                        <dd className="mt-1 font-medium text-gray-700">{termino.definition}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Definitions;