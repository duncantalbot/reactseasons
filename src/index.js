import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    //Always called when create component.
    constructor(props) {

        //Reference to parents constructor function. React.component
        super(props);

        //THIS IS THE ONLY TIME we do direct assigment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage : err.message});
            }
        );
    }

    //React says we have to define render methid.
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: {this.state.lat}</div>
        }

            return <div>Loading!</div>
    };
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);