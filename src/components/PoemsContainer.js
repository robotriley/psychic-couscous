import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  return (
    <div className="poems-container">
      {
        poems.map((poem) => {
          return (
            <Poem poem={poem} key={poem.id} />
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;
