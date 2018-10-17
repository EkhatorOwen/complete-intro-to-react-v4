import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import pf from "petfinder-client";
import loadable from 'react-loadable';
import Navbar from './Navbar'
import { Provider } from "./SearchContext";
import { Provider as ReduxProvider } from 'react-redux'
import  store  from './store'

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadableDetails = loadable({
  loader: () => import('./Details.js'),
  loading(){
    return <h1>loading split out code</h1>
  }
})

const LoadableResults = loadable({
  loader: () => import('./Results'),
  loading(){
    return <h1>loading split out code</h1>
  }
})

const LoadableSearchParams = loadable({
  loader: () => import('./SearchParams'),
  loading(){
    return <h1>loading split out code</h1>
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Provider value={this.state}>
        <ReduxProvider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
          </ReduxProvider>
          </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
