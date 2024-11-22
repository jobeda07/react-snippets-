import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./Bottle.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleAddToCart = bottle => {
        console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div >
            <h3>Bottles total : {bottles.length}</h3>
            <h3>cart : {cart.length}</h3>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;