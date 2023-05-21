import './App.css';
import FormDemoOne from './FormDemoOne';
import FormDemoTwo from './FormDemoTwo';
import CardsDemo from './CardsDemo';
import { cardList } from './mockList';


function App() {
  return (
    <div className="App">
      <div className='flex flex-row'>
          <FormDemoOne />
          <FormDemoTwo />
      </div>
      <div>
        <CardsDemo cardList={cardList}/>
      </div>  
    </div>
  );
}

export default App;
