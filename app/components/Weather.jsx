/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return{
            isLoading : false
        }
    },
    handleSearch : function (location) {
      var duplicateThis = this;

      this.setState({
          isLoading : true,
          errorMessage : undefined,
      });

      openWeatherMap.getTemp(location).then(function(data){
          duplicateThis.setState({ location : data.name, temp : data.main.temp, isLoading : false});
      }, function(err){
          duplicateThis.setState({ isLoading : false, errorMessage: err.message});
      });
    },
    render: function (){
        var {temp, isLoading, location, errorMessage} = this.state;

        //render msg
        function renderMessage(){
            if(isLoading){
                return (<h3> Fetching weather..</h3>);
            }
            if(location && temp){
                return (<WeatherMessage location={location} temp={temp}/>);
            }
        }
        // render err
        function renderError(){
            //debugger;
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal/>
                );
            }
        }


        return(
            <div>
                <h1 className="text-center"> Aaj ka Weather </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;

