import React from 'react';
import Action from './Action';

const Actions = ({ actions, legendary }) => {
  const action = actions.map((x) => {
    return <Action name={x.name} desc={x.desc} />;
  });
  return (
    <div>
      {legendary ? (
        <h2 className="actions_header">Legendary Actions</h2>
      ) : (
        <h2 className="actions_header">Actions</h2>
      )}
      {action}
    </div>
  );
};

export default Actions;
