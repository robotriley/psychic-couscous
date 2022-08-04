import React, {useState} from "react";

function Poem({poem} ) {
  const {title, content, author} = poem

  const [isRead, setIsRead] = useState(true)

  const toggleRead = () => {
    setIsRead((isRead) => !isRead)
  }

  return (
    <div>
      <h3>{ title }</h3>
      <p>{ content }</p>
      <p>
        <strong>- By { author }</strong>
      </p>
      {isRead ? <button onClick={toggleRead} >Mark as Read</button> :

      <button onClick={toggleRead}>Mark as Unread</button>}
    </div>
  );
}

export default Poem;
