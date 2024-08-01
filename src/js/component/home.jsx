import React, { useEffect, useState } from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";

const Home = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {       //useEffect: Le dice al reloj cuándo empezar y cuándo detenerse.
        const intervalId = setInterval(() => {       //setInterval: Cada segundo, suma 1 al número.
            setTimer(prevTimer => prevTimer + 1);     //setTimer(prevTimer => prevTimer + 1): Esto es lo que realmente suma 1 al número cada vez que pasa un segundo.
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="text-center">
            <section className="counter-holder">
                <SecondsCounter number={<span className="fa fa-clock"></span>} />
                <SecondsCounter number={Math.floor(timer / 100000) % 10} />
                <SecondsCounter number={Math.floor(timer / 10000) % 10} />
                <SecondsCounter number={Math.floor(timer / 1000) % 10} />
                <SecondsCounter number={Math.floor(timer / 100) % 10} />
                <SecondsCounter number={Math.floor(timer / 10) % 10} />
                <SecondsCounter number={timer % 10} />
            </section>
        </main>
    );
};

export default Home;
