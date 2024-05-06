function BotArmy({ id, onDelete }) {
    function handleClick() {
        fetch(`https://bot-battlr-db-json.onrender.com/bots/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            onDelete(id);
        })
        
    }

    return (
        <button onClick={handleClick} className="btn btn-danger">X</button>
    )
    }

        export default BotArmy;
