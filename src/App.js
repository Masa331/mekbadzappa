import React, { Component } from 'react';
import { Utils } from './utils';
import { Store } from './store';

function Row(props) {
  return (
    <tr key={props.id}>
      <td>{props.hours}</td>
      <td>{props.description}</td>
      <td><button className="btn btn-link" data-id={ props.id } onClick={ props.deleteHandler }>x</button></td>
    </tr>
  )
}

const Blank = { hours: '', description: '', data: [] };

class App extends Component {
  constructor(props) {
    super(props)
    this.state = Store.get() || Blank
  }

  saveAndSetState = (newState) => {
    this.setState(Store.mergeAndSet(newState))
  }

  handleOnHourChange = (e) => {
    this.saveAndSetState({ hours: e.target.value });
  }

  handleOnDescriptionChange = (e) => {
    this.saveAndSetState({ description: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let newState = {
      hours: '',
      description: '',
      data: [
        ...this.state.data,
        {
          id: Utils.uuid(),
          hours: this.state.hours,
          description: this.state.description
        }
      ]
    }

    this.saveAndSetState(newState)
  }

  deleteItem = (e) => {
    this.saveAndSetState(
      { data: this.state.data.filter(dato => dato.id !== e.target.dataset.id) }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleFormSubmit }>
          <div className="form-row">
            <div className="col-sm-2">
              <input className="form-control" type="text" value={this.state.hours} onChange={ this.handleOnHourChange }/>
            </div>
            <div className="col col-sm-8">
              <input className="form-control" type="text" value={this.state.description} onChange={ this.handleOnDescriptionChange }/>
            </div>
            <div className="col col-sm-2">
              <button className="btn btn-block btn-outline-secondary" type="submit">Wagh!</button>
            </div>
          </div>
        </form>

        <hr/>

        <div className="mt-2">
          <table className="table table-sm no-top-border">
            <tbody>
              { this.state.data.map((dato) => (
                <Row key={ dato.id } deleteHandler={ this.deleteItem } {...dato}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
