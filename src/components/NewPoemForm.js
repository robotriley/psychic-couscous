import React, {useState} from "react";

function NewPoemForm( {setRefresh }) {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  // console.log({title, author, content})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted!")
    fetch('http://localhost:8004/poems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        author: author,
        content: content
      })
    })
    setTitle("")
    setAuthor("")
    setContent("")
    setRefresh(prev => !prev)
  }

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input 
        type="text" 
        placeholder="Title"
        value={ title }
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Author"
        value={ author }
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
