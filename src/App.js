import './App.css';
import Enes from './Enes';

function App() {
  // Const ile sabit değer ataması yapılır
  const title="React Component Dersleri";
  const description="Udemy React Dersleri";
  return (
    <div className="App">
      
      <Enes aciklama={description} baslik={title}/>
    </div>
  );
}

export default App;
