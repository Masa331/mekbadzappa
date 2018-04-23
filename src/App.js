import React, { Component, Fragment } from 'react';
import { Utils } from './utils';
import { Store } from './store';
require('./coreutils.js')

function Row(props) {
  return (
    <tr>
      <td>{props.hours}</td>
      <td>{props.description}</td>
      <td><button className="btn btn-link" data-id={ props.id } onClick={ props.deleteHandler }>x</button></td>
    </tr>
  )
}

function RecordGroup(props) {
  return (
    <Fragment>
      <tr><td colSpan="3">{ props.date }</td></tr>
      { props.records.map((record) => (
        <Row key= { record.id } deleteHandler={ props.deleteHandler } {...record}/>
      ))}
    </Fragment>
  )
}

function RecordsTable(props) {
  let groups = props.records.groupBy((record) => ( record.date ));

  return (
    <table className="table table-sm no-top-border">
      <tbody>
        { Object.entries(groups).map((group) => (
          <RecordGroup key={ group[0] } date={ group[0] } deleteHandler={ props.deleteHandler } records={ group[1] }/>
        ))}
      </tbody>
    </table>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = Store.get()
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
          description: this.state.description,
          date: Date.today()
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
          <RecordsTable deleteHandler={ this.deleteItem } records={ this.state.data }/>
        </div>
      </div>
    );
  }
}

export default App;
