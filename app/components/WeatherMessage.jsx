/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

var WeatherMessage = React.createClass({
    render: function (){
        var location = this.props.location;
        var temp = this.props.temp;
        return(
            <h3> Weather in your {location} today is {temp}° F </h3>
        );
    }
});

module.exports = WeatherMessage;

