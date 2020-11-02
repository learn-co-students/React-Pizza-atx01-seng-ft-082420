import React from "react"

const PizzaForm = (props) => {
  const pizza = props.pizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e) => {props.handleChange(e)}} type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping} name="topping"/>
        </div>
        <div className="col">
          <select onChange={(e) => {props.handleChange(e)}} name="size" value={pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(e) => {props.handleChange(e)}} className="form-check-input" type="radio" name="vegetarian" value={true} checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(e) => {props.handleChange(e)}} className="form-check-input" type="radio" name="vegetarian" value={false} checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => {props.handleSubmit(e)}}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
