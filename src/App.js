import React, { Component } from 'react';
import './App.css';

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
      <div>
        <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <input className="form-control col-sm-1" type="text" value={this.state.hours} onChange={ this.handleOnHourChange }/>
          <input className="form-control col-sm-8" type="text" value={this.state.description} onChange={ this.handleOnDescriptionChange }/>
          {/* <button className="btn btn-sm btn-outline-secondary col-sm-2" type="submit">Submit</button> */}
          <button className="btn btn-outline-secondary col-sm-3" type="submit">Waaaaagh</button>
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
