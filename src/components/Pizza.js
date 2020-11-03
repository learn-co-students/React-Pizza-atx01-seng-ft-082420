import React from 'react';

const Pizza = ({ pizza, updatePizza }) => {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button
          onClick={() => updatePizza(pizza)}
          type='button'
          className='btn btn-primary'
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
