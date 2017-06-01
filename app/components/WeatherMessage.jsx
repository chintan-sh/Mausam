/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

var WeatherMessage = React.createClass({
    render: function (){
        return(
            <h3> Weather in your city today is - 63° F </h3>
        );
    }
});

module.exports = WeatherMessage;

