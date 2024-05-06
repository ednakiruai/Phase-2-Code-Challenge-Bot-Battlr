import React, {useState, useEffect} from 'react';
import Bot from './components/BotCollection'
import './App.css'

function App() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch(`https://bot-battlr-db-json.onrender.com/bots`)
    .then(res => res.json())
    .then(data => setBots(data))
  }, [])
  function handleDelete(id) {
    setBots(bots.filter(bot => bot.id !== id));
}
  return (
    <div>
       <Bot bots={bots} handleDelete={handleDelete}/>

    </div>
  )
}
export default App;