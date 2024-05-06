import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function BotSpecs(){
    const {id} = useParams()
    const [Bots,setBots] = useState({})
    useEffect(()=> {
        fetch(`https://bot-battlr-db-json.onrender.com/bots/${id}`)
        .then(res => res.json())
        .then(data => {
            setBots(data)
        })
    }, [id])
    return(
       <div>
         <div className="col-sm-3 mb-4" >
        
            <div className="card">
              <img className="card-img-top"src={Bots.avatar_url} style={{backgroundColor: "gray",borderRadius:"70%"}} alt="Avatar"/>
              <div className="card-body">
              <h2 className="card-title">{Bots.name}</h2>
              <h5 className="card-text">Bot_class: {Bots.bot_class}</h5>
                        <p><span className="icon health-icon">❤️</span>Health: {Bots.health}</p>
                        <p><span className="icon damage-icon">💥</span>Damage: {Bots.damage}</p>
                        <p><span className="icon armor-icon">🛡️</span>Armor: {Bots.armor}</p>
                        <p className="card-text">Catchphrase: {Bots.catchphrase}</p>
                        <p className="card-text">Created At: {Bots.created_at}</p>
                        <p className="card-text">Updated At: {Bots.updated_at}</p>
                        <Link to="/Phase-2-Code-Challenge-Bot-Battlr">
                       <button className="btn btn-success btn-sm m-2">BACK</button>
                       </Link>
                       
              
            </div>
            </div>
            </div>
       </div>
    )
}
export default BotSpecs;