import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const URL = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pizzas: [],
      selected: {
        id: 0,
        topping: '',
        size: '',
        vegetarian: false
      }
    }
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  selectPizza = (pizza) => {
    this.setState({
      selected: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      }
    })
  }

  editPizza = (pizza) => {
    console.log(pizza)
    fetch(`${URL}/${pizza.id}` , {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(res => res.json())
    .then(newPizza => this.setState({pizzas: this.state.pizzas.map(p => p.id === newPizza.id ? newPizza : p)}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.editPizza(this.state.selected)
  }

  handleChange = (e) => {
    if (e.target.name === 'topping') {
        this.setState({selected: {...this.state.selected, topping: e.target.value}})
    } else if (e.target.name === 'size') {
        this.setState({selected: {...this.state.selected, size: e.target.value}})
    } else if (e.target.name === 'vegetarian') {
        let val = (e.target.value === 'true' ? true : false)
        this.setState({selected: {...this.state.selected, vegetarian: val}})
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selected} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <PizzaList pizzas={this.state.pizzas} selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
