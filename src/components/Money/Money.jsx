function Money({tomorrow,
    fifteenDays,
    thirtyDays,
    ninetyDays}){

    
        return (
            <>
                <h3>Você receberá:</h3>
                <p>Amanhã: 
                    <p> R$ {tomorrow ? tomorrow : 0},00 </p>
                </p>
                <p>Em 15 dias: 
                    <p>R$ {fifteenDays ? fifteenDays : 0},00</p>
                </p>
                <p>Em 30 dias: 
                    <p>R$ {thirtyDays ? thirtyDays : 0},00</p>
                </p>
                <p>Em 90 dias: 
                    <p>R$ {ninetyDays ? ninetyDays : 0},00</p>
                </p>
        
            </>
        )
};

export default Money;