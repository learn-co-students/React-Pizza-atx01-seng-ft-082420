import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
class App extends Component {
  state = {
    pizzas: [],
    editPizza: {
      id: 0,
      size: '',
      topping: '',
      vegetarian: false
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => {
        // console.log(pizzas);
        this.setState({ pizzas });
      });
  }
  updatePizza = pizza => {
    // console.log('pizza');
    // let check = pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian';
    this.setState({
      editPizza: pizza
    });
  };

  handleChange = i => {
    if (i.name === 'topping') {
      this.setState({
        editPizza: { ...this.state.editPizza, topping: i.value }
      });
    } else if (i.name === 'size') {
      this.setState({
        editPizza: { ...this.state.editPizza, size: i.value }
      });
    } else if (i.name === 'vegetarian') {
      let val = i.value === 'true' ? true : false;
      this.setState({
        editPizza: { ...this.state.editPizza, vegetarian: val }
      });
    }
    console.log(this.state.editPizza);
  };

  handleSubmit = editPizza => {
    fetch(`http://localhost:3000/pizzas/${editPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editPizza)
    })
      .then(res => res.json())
      .then(pizzaObj => {
        console.log('from server', pizzaObj);
        this.setState({
          pizzas: this.state.pizzas.map(pizza =>
            pizza.id === pizzaObj.id ? pizzaObj : pizza
          )
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizza={this.state.editPizza}
          checked={this.state.checked}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} updatePizza={this.updatePizza} />
      </Fragment>
    );
  }
}

export default App;
