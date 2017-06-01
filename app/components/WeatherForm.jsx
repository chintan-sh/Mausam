/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

var WeatherForm = React.createClass({
    render: function (){
        return(
            <form>
                <input type="text" placeholder="Enter your city" ref="city" />
                <button> Get Weather </button>
            </form>
        );
    }
});

module.exports = WeatherForm;

