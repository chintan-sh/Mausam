/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return{
            isLoading : false
        }
    },
    handleSearch : function (location) {
      var duplicateThis = this;
      debugger;
      this.setState({ isLoading : true});

      openWeatherMap.getTemp(location).then(function(data){
          duplicateThis.setState({ location : data.name, temp : data.main.temp, isLoading : false,});
      }, function(err){
          duplicateThis.setState({ isLoading : false,});
          alert("Sorry! Invalid location. " );
      });
    },
    render: function (){
        var {temp, isLoading, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return (<h3> Fetching weather..</h3>);
            }

            if(location && temp){
                return (<WeatherMessage location={location} temp={temp}/>);
            }
        }


        return(
            <div>
                <div>
                    <WeatherForm onSearch={this.handleSearch}/>
                </div>
                <div>
                    {renderMessage()}
                </div>
            </div>
        );
    }
});

module.exports = Weather;

