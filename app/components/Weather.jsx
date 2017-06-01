/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function (){
        return(
            <div>
                <div>
                    <WeatherForm/>
                </div>
                <div>
                    <WeatherMessage/>
                </div>
            </div>
        );
    }
});

module.exports = Weather;

