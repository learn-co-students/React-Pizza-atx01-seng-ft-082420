import React from "react"

const Pizza = ({pizza, selectPizza, deletePizza}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button onClick={() => {selectPizza(pizza)}} type="button" className="btn btn-primary">Edit Pizza</button></td>
      <td><button onClick={() => {deletePizza(pizza)}} type="button" className="btn btn-primary">Delete Pizza</button></td>
    </tr>
  )
}

export default Pizza
