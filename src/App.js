import './App.css';
import Enes from './Enes';
import AraKatman from './AraKatman';

function App() {
  // Const ile sabit değer ataması yapılır
  // const title="React Component Dersleri";
  // const description="Udemy React Dersleri";
  const array=[
    {
      Id:1,
      title:"Hiper",
      description:"React Dersleri",
    },
    {
      Id:2,
      title:"Super",
      description:"React Dersleri 2",
    },
    {
      Id:3,
      title:"Hiper Super",
      description:"React Dersleri 3",
    },
  ]
  return (
    <div className="App">
      
      <AraKatman dizi={array} />
    </div>
  );
}

export default App;
