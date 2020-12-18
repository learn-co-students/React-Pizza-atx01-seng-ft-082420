import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import Flexbox from './components/Flexbox'
const URL = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pizzas: [],
      pizza: {
        id: 0,
        topping: '',
        size: '',
        vegetarian: false
      },
      search: '',
      filter: ''
    }
  }

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  selectPizza = (pizza) => {
    this.setState({ pizza })
  }

  setSearch = (input) => {
    let search = input.toLowerCase()
    this.setState({ search })
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  handleChange = (i) => {
    if (i.name === "topping") {
      this.setState({
        pizza: { ...this.state.pizza, topping: i.value }
      })
    } else if (i.name === "size") {
      this.setState({
        pizza: { ...this.state.pizza, size: i.value }
      })
    } else if (i.name === "vegetarian") {
      let val = (i.value === 'true' ? true : false)
      this.setState({
        pizza: { ...this.state.pizza, vegetarian: val }
      })
    }
    console.log(this.state.pizza)
  }

  handleSubmit = (e, id) => {
    e.preventDefault()
    if (this.state.pizza.id === 0) {
      this.createPizza()
    } else {
      this.updatePizza(id)
    }
  }

  updatePizza = (id) => {
    fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(this.state.pizza)
    })
      .then(res => res.json())
      .then(pizza => this.setState({ pizzas: this.state.pizzas.map(p => p.id === pizza.id ? pizza : p) }))
  }

  createPizza = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(this.state.pizza)
    })
      .then(res => res.json())
      .then(pizza => this.setState({ pizzas: [...this.state.pizzas, pizza] }))
  }

  deletePizza = (pizza) => {
    fetch(`${URL}/${pizza.id}`, {
      method: 'DELETE'
    })
      .then(this.setState({ pizzas: this.state.pizzas.filter(p => p.id !== pizza.id) }))
  }

  render() {
    const noms = this.state.pizzas.filter(p => p.topping.toLowerCase().includes(this.state.search))
    const pizzas = noms.filter(p => p.size.includes(this.state.filter))
    return (
      <Fragment>
        <Header />
        <Flexbox />
        {/* <PizzaForm pizza={this.state.pizza} handleSubmit={this.handleSubmit} handleChange={this.handleChange} setSearch={this.setSearch}
        setFilter={this.setFilter}/>
        <PizzaList pizzas={pizzas} selectPizza={this.selectPizza} deletePizza={this.deletePizza}/> */}
      </Fragment>
    );
  }
}

export default App;
