import {About1, About2} from "./Components/About";
import {Footer1, Footer2} from "./Components/Footer";
import {Info1, Info2, Info3, Info4} from "./Components/Info";
import {Interests1, Interests2} from "./Components/Interests";


function App() {
  return (
    <div className="App">
      <div className="business_cards">
        <div className="card-1">
          <Info3 />
          <About1 />
          <Interests1 />      
          <Footer1 />
        </div>      
      </div>

      <div className="business_cards">
        <div className="card-1">
          <Info1 />
          <About1 />
          <Interests1 />      
          <Footer1 />
        </div>      
      </div>

      <div className="business_cards">
        <div className="card-2">
          <Info2 />
          <About2 />
          <Interests2 />      
          <Footer2 />
        </div>      
      </div>

      <div className="business_cards">
        <div className="card-2">
          <Info4 />
          <About2 />
          <Interests2 />      
          <Footer2 />
        </div>      
      </div>

     
      
    </div>
  );
}

export default App;
