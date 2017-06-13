/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

// var WeatherMessage = React.createClass({
//     render: function (){
//         var location = this.props.location;
//         var temp = this.props.temp;
//         return(
//             <h3> Weather in {location} today is {temp}° C </h3>
//         );
//     }
// });


// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var WeatherMessage = ({temp, location}) => {

    return(
        <h3> Weather in {location} today is {temp}° C </h3>
    );
};

module.exports = WeatherMessage;

