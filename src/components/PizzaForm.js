import React from "react"

const PizzaForm = ({pizza, handleChange, handleSubmit, setSearch, setFilter}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" onChange={(e) => handleChange(e.target)} placeholder="Pizza Topping" value={pizza.topping}/>
        </div>
        <div className="col">
          <select value={pizza.size} name="size" onChange={(e) => handleChange(e.target)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" onChange={(e) => handleChange(e.target)} value={true} checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" onChange={(e) => handleChange(e.target)} value={false} checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e, pizza.id)}>Submit</button>
          <div>
            <strong>Filter: </strong>
          <select onChange={(e) => setFilter(e.target.value)} placeholder="Size">
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          </div>
        </div>
        <input type="text" className="form-control" name="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Pizza by Topping"/>
        <label>
       
      </label>
      </div>

  )
}

export default PizzaForm