import { useState } from "react";
import Money from "../components/Money/Money";
import Simulation from "../components/Simulation/Simulation";

function Calculator(){

    const [tomorrow, setTomorrow] = useState(0);
    const [fifteenDays, setFifteenDays] = useState(0);
    const [thirtyDays, setThirtyDays] = useState(0);
    const [ninetyDays, setNinetyDays] = useState(0);

    return (
        <>
            <Simulation
            setTomorrow={setTomorrow}
            setFifteenDays={setFifteenDays}
            setThirtyDays={setThirtyDays}
            setNinetyDays={setNinetyDays}/>
            
            <Money
            tomorrow={tomorrow}
            fifteenDays={fifteenDays}
            thirtyDays={thirtyDays}
            ninetyDays={ninetyDays} />
        </>
    
    )
};

export default Calculator;