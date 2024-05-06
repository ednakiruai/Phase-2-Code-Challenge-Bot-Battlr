import BotArmy from "./BotArmy";
import BotPage from "./BotPage"
import { useState } from "react";
import { Link } from "react-router-dom";
import SortBar from "./SortBot";
import ClassFilter from "./BotFilter";
function Bot({bots, handleDelete,}){
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [sortOption,setSortOption] = useState("")
  const [selectedClasses, setSelectedClasses] = useState([]);
  const addBot = (bot)=>{
    // console.log("Enlist button clicked")
    if (enlistedBots.length < 4 && !enlistedBots.find((b) => b.id === bot.id) && !enlistedBots.some((b) => b.bot_class=== bot.bot_class)){
      setEnlistedBots([...enlistedBots, bot]);
      setSelectedClasses([...selectedClasses, bot.bot_class]);
    }
  }
  function removeFromArmy(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
  }
  function handleSortOption(e){
    setSortOption(e.target.value)
  }
  function handleClassChange(e) {
    // console.log("Filter selection changed")
    const selectedClass = e.target.value;
    setSelectedClasses((prevSelected) =>
      prevSelected.includes(selectedClass)
        ? prevSelected.filter((cls) => cls !== selectedClass)
        : [...prevSelected, selectedClass]
    );
  }
  const filteredBots = selectedClasses.length
    ? bots.filter((bot) => selectedClasses.includes(bot.bot_class))
    : bots;
  const sortBots = (bots,sortOption)=>{
    if(sortOption==="health"){
      return bots.slice().sort((a,b) =>b.health-a.health)
    }
    else if(sortOption === "armor"){
      return bots.slice().sort((a,b) => b.armor-a.armor)
    }
    else if(sortOption === "damage" ){
      return bots.slice().sort((a,b) => b.damage-a.damage)
    }
    else{
      return bots.slice();
    }
  }
  const sortedBots = sortBots(filteredBots, sortOption);
   return(
    <div>
      <h2 className="container bg bg-success">Bot Battlr Army</h2>
      <BotPage  army={enlistedBots} removeFromArmy={removeFromArmy}/>
    <div className="container">
    <h2>Bot Battlr Collection</h2>
    <SortBar handleSortOption={handleSortOption} sortOption={sortOption}/>
    <ClassFilter
          classes={[
            "Support",
            "Medic",
            "Assault",
            "Defender",
            "Captain",
            "Witch",
          ]}
          selectedClasses={selectedClasses}
          handleClassChange={handleClassChange}
        />
        <div className="row">
        {sortedBots.map(bot => (
            <div className="col-sm-3 mb-4" key={bot.id}>
            <div className="card">
              <img className="card-img-top"src={bot.avatar_url} style={{backgroundColor: "gray"}} alt="Avatar"/>
              <div className="card-body">
              <h2 className="card-title">{bot.name}</h2>
              <p className="card-text">{bot.created_at}</p>
              <p className="card-text">{bot.updated_at}</p>
              <button className="btn btn-success btn-sm m-2" onClick={() => addBot(bot)}>ENLIST</button>
              <Link to={"/Phase-2-Code-Challenge-Bot-Battlr/Bots/" + bot.id} className="btn btn-primary btn-sm m-2">VIEW</Link>
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