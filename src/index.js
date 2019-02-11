import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    //Always called when create component.
    constructor(props) {

        //Reference to parents constructor function. React.component
        super(props);

        //THIS IS THE ONLY TIME we do direct assigment to this.state
        this.state = {lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude});
            },
            (err) => console.log(err)
        );

    }

    //React says we have to define render methid.
    render() {
        return (
            <div>Latitude: {this.state.lat}</div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);