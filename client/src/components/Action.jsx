import React from "react";

const Action = ({ name, desc }) => {
  return (
    <div className="action">
      <b>
        {name}{'. '}
      </b>
      {desc}
    </div>
  )
};

export default Action