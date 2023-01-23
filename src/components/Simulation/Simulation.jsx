import api from "../../services/api";
import { dataSchema } from "../../Schema/schema"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Simulator } from "./style";

function Simulation({ setTomorrow, 
    setFifteenDays,
    setThirtyDays,
    setNinetyDays}){

        const { register, handleSubmit, formState: {errors} ,} = useForm({
            resolver: yupResolver(dataSchema)
        })


        const submitFunction = (data) => {
            api.post("", data)
            .then((response) => {
                const resTomorrow= Object.values(response.data)[0]
                const resFifteen= Object.values(response.data)[1]
                const resThirty= Object.values(response.data)[2]
                const resNinety= Object.values(response.data)[3]
            
                setTomorrow(resTomorrow)
                setFifteenDays(resFifteen)
                setThirtyDays(resThirty)
                setNinetyDays(resNinety)   
            })
            .catch((err) =>{
                console.log(err);  
            })
    
        }
    
        return (
            <>
            <Simulator>     
            <h2>Simule sua Antecipação</h2>
            <form onSubmit={handleSubmit(submitFunction)}>
                <div>
                    <label>
                        Informe o valor da venda *
                    </label>
                    <br></br>
                    <input type="number" max={10000} required
                    placeholder={errors.amount?.message} {...register("amount")}/>
                    </div>
              
                
                <div>
                    <label>
                        Em quantas parcelas *
                    </label>
                    <br></br>
                    <input type="number" max={12} required
                    placeholder={errors.installments?.message} {...register("installments")}/>
                    <br></br>
                    <span>Máximo de 12 parcelas</span>
                </div>
              

                <div>
                    <label>
                        Informe o percentual de MDR *
                    </label>
                    <br></br>
                    <input type="number" max={100} required
                    placeholder={errors.mdr?.message} {...register("mdr")}/>
                
                <br></br>
                <input type="submit" />
                    </div>
            </form>
            </Simulator>
            </>
            
        )
};


export default Simulation;