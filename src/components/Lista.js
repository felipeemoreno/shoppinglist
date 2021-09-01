import React from 'react'

function Lista(props) {
  const { listTitle, list, favButton, removeButton, favButtonTitle } = props;

  if(list.length <= 0)
    return false;

  return (
    <>
      <h2>{listTitle}</h2>
      <div className="item-lista">
        {list.map(item => (
        <div key={item.id} className="item-linha">
          <div className="item-topo">
            <h3>{item.name}</h3>
            <div>{item.quantity}</div>
          </div>
          <div className="item-bottom">{item.description}</div>
          <div className="buttons">
            <button onClick={() => favButton(item.id)} id="removeProduct">{favButtonTitle}</button>
            {removeButton && <button onClick={() => removeButton(item.id)} id="favProduct">Remover Produto</button>}
          </div>
        </div>
      ))
      }
      </div>
    </>
  )
}

export default Lista
