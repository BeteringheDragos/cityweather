import React from "react";

const TopButtons = ({setQuery}) => {

    const cities =[
        {
            id:1,
            name: 'London',
        },
        {
            id:2,
            name: 'Paris',
        },
        {
            id:3,
            name: 'Romania',
        },
        {
            id:4,
            name: 'Tokyo'
        }
    ]


    return <div className="flex items-center justify-around my-6">

        {
            cities.map((city) => (
                <button key={city.id} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transistion ease-in hover:scale-110" onClick={() => setQuery({ q: city.name})}>{city.name}</button>
            ))
        }

        
    </div>;
};

export default TopButtons;