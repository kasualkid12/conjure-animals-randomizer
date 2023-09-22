import React from "react";
import Special_ability from "./Special_ability";

const Special_abilities = ({ special_abilities }) => {
  const sa = special_abilities.map((x) => {
    return <Special_ability name={x.name} desc={x.desc} usage={x.usage} />
  })
return (
  [...sa]
)
}

export default Special_abilities;