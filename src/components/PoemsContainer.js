import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, setRefresh }) {
  return (
    <div className="poems-container">
      {
        poems.map((poem) => {
          return (
            <Poem poem={poem} key={poem.id} setRefresh={setRefresh} />
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;
