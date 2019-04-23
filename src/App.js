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

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      title: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;

    if (/\S/.test(title)) {
      this.setState({
        globalTitle: `Mon formulaire - <valeur du state ${title}>`,
      })
    }else{
      alert("empty input!")
    }
  }

  componentDidMount() {
    console.log("Formulaire rendu");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.globalTitle !== this.state.globalTitle) {
      console.log("Titre changé")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="">
          <h2>{this.state.globalTitle}</h2>
          <Form
          title={this.state.title}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          />
        </header>
      </div>
    );
  }
}

export default App;
