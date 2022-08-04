import React, {useState} from "react";

function Poem({ poem, setRefresh }) {
  const {id, title, content, author} = poem

  const [isRead, setIsRead] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleRead = () => {
    setIsRead((isRead) => !isRead)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setRefresh(prev => !prev)
  }

  const toggleFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  return (
    <div>
      <h3>
        {isFavorite ? <button onClick={toggleFavorite} className="faved" >★</button>
        :
        <button onClick={toggleFavorite} className="fav" >☆</button>}
       { title }
      </h3>
      <p>{ content }</p>
      <p>
        <strong>- By { author }</strong>
      </p>
      {isRead ? <button onClick={toggleRead} >Mark as Read</button> :
      <button onClick={toggleRead} className="read" >Mark as Unread</button>}
      
      <br></br><br></br>

      <button onClick={handleDeleteClick} className="del" >Delete Poem </button>
    </div>
  );
}

export default Poem;
