import React from 'react';

import { pizzaData } from '../data';
import Pizza from './Pizza';

const Menu = () => {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cousine. 6 creative dishes to choose from. All from our 
                        stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza 
                                key={pizza.name}
                                pizzaObj={pizza}
                            />
                        ))}
                    </ul>
                </>
            ) : <p>We're still working on our menu. Please come later :)</p>}
        </main>
    );
}

export default Menu;
