import { useState } from 'react';
let id = 0;
function App() {
  const [input, setInput] = useState('');
  const [arr, setArr] = useState([]);
  return (
    <>
      <input value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key !== 'Enter') return;
          setInput('');
          setArr([...arr, { id: id++, input: input }]);
        }} />
      <ul>{
        arr.map(obj =>
          <li key={obj.id}>
            <button onClick={() =>
              setArr(arr.filter((o => o.id != obj.id)))}>
                {obj.input}
            </button>
          </li>)}
      </ul>
    </>
  );
}

export default App;
