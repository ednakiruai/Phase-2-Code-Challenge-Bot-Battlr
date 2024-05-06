import BotArmy from "./BotArmy";
import BotPage from "./BotPage"
import { useState } from "react";
function Bot({bots, handleDelete}){
  const [enlistedBots, setEnlistedBots] = useState([]);
  function addBot(bot) {
    if (enlistedBots.length < 4 && !enlistedBots.find(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
      
    }
  }
  function removeFromArmy(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
  }
   return(
    <div>
      <h2 className="container bg bg-success">Bot Battlr Army</h2>
      <BotPage army={enlistedBots} removeFromArmy={removeFromArmy}/>
    <div className="container">
    <h2>Bot Battlr Collection</h2>
        <div className="row">
        {bots.map(bot => (
            <div className="col-sm-3 mb-4" key={bot.id}>
            <div className="card" >
              <Link to={`/Phase-2-Code-Challenge-Bot-Battlr/Bots/${bot.id}`}><img className="card-img-top"src={bot.avatar_url} style={{backgroundColor: "gray"}} alt="Avatar"/></Link>
              <div className="card-body">
              <h2 className="card-title">{bot.name}</h2>
              <p className="card-text">{bot.created_at}</p>
              <p className="card-text">{bot.updated_at}</p>
              <button className="btn btn-success btn-sm m-2" onClick={() => addBot(bot)}>ENLIST</button>
              <BotArmy id={bot.id} onDelete={handleDelete}/>
            </div>
            </div>
            </div>
          ))}
    </div>
    </div>
    </div>
    
   )
}
export default Bot;