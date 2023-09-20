import React from "react";

const SavingThrows = ({ savingThrows }) => {
  const items = []
  for (const prop in savingThrows) {
    console.log(prop)
    items.push(`${prop} +${savingThrows[prop]}, `)
  }
  return (
    <div>
      Saving Throws {items}
    </div>
  )
};

export default SavingThrows