import React from "react"; 

const PriceCart = ({price}) => {

    return (
        <div className="">
            <h2 className="text-5xl font-extrabold">{price.price}</h2>
            <h5 className="text-2xl font-bold">{price.name}</h5>
            <p>Features: </p>

            {
                price.features.map(feature => <li>{feature}</li> )
            }
        </div>

    );
};

export default PriceCart;