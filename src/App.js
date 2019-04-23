import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: ''
    }
  }

  componentDidMount() {
    console.log("Formulaire rendu");
  }

  componentDidUpdate() {
    console.log("Titre changé")
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      globalTitle: `Mon formulaire - ${this.state.title}`
    });
    document.title = this.state.globalTitle;
  }

  render() {
    return (
      <div className="App">
          <h2>{this.state.globalTitle}</h2>
          <Form
            title={this.state.title}
            onChange={this.onChange}
            handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default App;
