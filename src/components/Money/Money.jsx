import { MoneyResults } from "./style";

function Money({tomorrow,
    fifteenDays,
    thirtyDays,
    ninetyDays}){

    
        return (
            <>
            <MoneyResults>
                <h3>VOCÊ RECEBERÁ:</h3>

                <div>
                <p>Amanhã:</p>
                    <p>R$ {tomorrow ? tomorrow : 0},00 </p>
                </div>

                <div>
                <p>Em 15 dias:</p>
                    <p>R$ {fifteenDays ? fifteenDays : 0},00 </p>
                </div>

                <div>
                <p>Em 30 dias:</p>
                    <p>R$ {thirtyDays ? thirtyDays : 0},00</p>
                </div>

                <div>
                <p>Em 90 dias:</p>
                    <p>R$ {ninetyDays ? ninetyDays : 0},00</p>
                </div>
        
            </MoneyResults>
            </>
        )
};

export default Money;