import { useState } from "react";
import Money from "../components/Money/Money";
import Simulation from "../components/Simulation/Simulation";
import { Container } from "./style";

function Calculator(){

    const [tomorrow, setTomorrow] = useState(0);
    const [fifteenDays, setFifteenDays] = useState(0);
    const [thirtyDays, setThirtyDays] = useState(0);
    const [ninetyDays, setNinetyDays] = useState(0);

    return (
        <>
            
        <Container>
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
        </Container>
        </>
    
    )
};

export default Calculator;