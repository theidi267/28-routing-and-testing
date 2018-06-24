import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.js';
import App from '../app.js';


export default class Noteform extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render(){
    return (
      <form>
        <h2>Create A New Note:</h2>
        <div>
          <label>Title:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Content:</label>
          <textarea name="content" rows="4" cols="50" />
        </div>
        <div>
          <input type="submit" value="Submit" onChange={App.addItem({"title":"testing"})}/>
        </div>
      </form>
    );
  }
}