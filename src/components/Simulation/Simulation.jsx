import api from "../../services/api";
import { dataSchema } from "../../Schema/schema"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
            <h2>Simule sua Antecipação</h2>
            <form action="" onSubmit={handleSubmit(submitFunction)}>
                    <label>
                        Informe o valor da venda *
                    </label>
                    <input type="number" max={10000} required
                    placeholder={errors.amount?.message} {...register("amount")}/>
              
                    <label>
                        Em quantas parcelas *
                    </label>
                    <input type="number" max={12} required
                    placeholder={errors.installments?.message} {...register("installments")}/>
                    <span>Máximo de 12 parcelas</span>
              
                    <label>
                        Informe o percentual de MDR *
                    </label>
                    <input type="number" max={100} required
                    placeholder={errors.mdr?.message} {...register("mdr")}/>
                
                <input type="submit" />
            </form>
            </>
            
        )
};


export default Simulation;