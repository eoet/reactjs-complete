import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class App extends Component {
  state = { lat: null, errMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errMessage: err.message,
        });
      }
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
