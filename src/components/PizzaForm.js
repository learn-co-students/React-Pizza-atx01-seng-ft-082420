import React from 'react';

const PizzaForm = ({ editPizza, handleSubmit, handleChange }) => {
  return (
    <div className='form-row'>
      <div className='col-5'>
        <input
          type='text'
          className='form-control'
          placeholder='Pizza Topping'
          name='topping'
          value={
            //Pizza Topping Should Go Here
            editPizza.topping
          }
          onChange={e => handleChange(e.target)}
        />
      </div>
      <div className='col'>
        <select
          onChange={e => handleChange(e.target)}
          name='size'
          value={editPizza.size}
          className='form-control'
        >
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
      </div>
      <div className='col'>
        <div className='form-check'>
          <input
            className='form-check-input'
            name='vegatarian'
            type='radio'
            value={true}
            checked={editPizza.vegetarian}
            onChange={e => handleChange(e.target)}
          />
          <label className='form-check-label'>Vegetarian</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            name='vegatarian'
            type='radio'
            value={false}
            checked={!editPizza.vegetarian}
            onChange={e => handleChange(e.target)}
          />
          <label className='form-check-label'>Not Vegetarian</label>
        </div>
      </div>
      <div className='col'>
        <button
          type='submit'
          className='btn btn-success'
          onClick={() => handleSubmit(editPizza)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
