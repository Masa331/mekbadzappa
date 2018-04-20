import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './log';
import MyP from './MyP.js';
import SecondP from './SecondP.js';

// require('./log');

// console.log(Testy.test1());


class App extends Component {
  state = {
    hours: '',
    description: '',
    data: []
  }

  handleOnHourChange = (e) => {
    this.setState({ hours: e.target.value });
  }

  handleOnDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      hours: '',
      description: '',
      data: [
        ...this.state.data,
        {
          id: Math.random(),
          hours: this.state.hours,
          description: this.state.description
        }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <MyP text={this.props.fok}/>
        <p>{window._initialState_.a}</p>
        <SecondP>lol</SecondP>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form className="form" onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Hours" value={this.state.hours} onChange={ this.handleOnHourChange }/>
          <input type="text" placeholder="Description" value={this.state.description} onChange={ this.handleOnDescriptionChange }/>
          <button type="submit">Submit</button>
        </form>

        <hr/>

        <table className="table">
          <tbody>
            {this.state.data.map((dato, index) => (
              <tr key={dato.id}>
                <td>{dato.hours}</td>
                <td>{dato.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
