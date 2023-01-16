import './App.css';
import { Container, Response, Register } from './components/styles/styles';

function App() {
  return (
    <>
    
    <Container>

      <Register>

        <h3>Simule sua antecipação</h3>

        <div>
          <label>Informe o valor da venda*</label>
          <input type="text" />
        </div>

          
          <div>
          <label>Em quantas parcelas*</label>
          <input type="text" />
          <p>Máximo de 12 parcelas</p>
         
         
          <label>Informe o percentual de MDR*</label>
          <input type="text" />

          </div>
      </Register>

    
        <Response>
      
          <h4>VOCÊ RECEBERÁ:</h4>

          <div>
          <p>Amanhã:</p>
          <p>R$ 0,00</p>  
          </div>

          <div>
          <p>Em 15 dias:</p>
          <p>R$ 0,00</p>  
          </div>

          <div>
          <p>Em 30 dias:</p>
          <p>R$ 0,00</p>  
          </div>

          <div>
          <p>Em 90 dias:</p>
          <p>R$ 0,00</p> 
          </div>     
          
        </Response>
    </Container>
    </>
  );
}

export default App;
