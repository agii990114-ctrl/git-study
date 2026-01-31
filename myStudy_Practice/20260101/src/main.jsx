import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const App = () => {

  const [flower,setFlower] = useState({color: '', kind: ''});

  const hanleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFlower( values => ({...values, [name]:value}));
  };

  return (
    <form>
      <label>Color: </label>
      <input type="text" name="color" value={flower.color} onChange={hanleChange}/>
      <label>Kind: </label>
      <input type="text" name="kind" value={flower.kind} onChange={hanleChange}/>
      <p>{flower.color} {flower.kind}</p>
    </form>
  )

}

createRoot(document.getElementById('root')).render(
  <App />
)
