import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    const getPoems = async () => {
      let req = await fetch('http://localhost:8004/poems')
      let res = await req.json()
      setPoems(res)
    }
    getPoems()
  }, [refresh])

  // console.log(poems)

  const toggleForm = () => {
    setShowForm((showForm) => !showForm)
  }


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={toggleForm} >Show/hide new poem form</button>
        {showForm ? <NewPoemForm setRefresh={setRefresh} /> : null}
      </div>
      <PoemsContainer poems={poems} setRefresh={setRefresh} />
    </div>
  );
}

export default App;
