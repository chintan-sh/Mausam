/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function () {
        return{
            location : "Mumbai",
            temp : 32,
        }
    },
    handleSearch : function (location) {
      this.setState({
         location : location,
         temp : 23,
      });
    },
    render: function (){
        var {temp,location} = this.state;
        return(
            <div>
                <div>
                    <WeatherForm onSearch={this.handleSearch}/>
                </div>
                <div>
                    <WeatherMessage location={location} temp={temp}/>
                </div>
            </div>
        );
    }
});

module.exports = Weather;

