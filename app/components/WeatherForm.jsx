/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

var WeatherForm = React.createClass({
    onFormSubmit : function (e) {
      e.preventDefault();
      var location = this.refs.location.value;
      if(location.length > 0){
          this.refs.location.value = "";
          this.props.onSearch(location);
      }else{
          alert("Please enter valid location");
      }
    },
    render: function (){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter your location" ref="location" />
                <input type="submit" className="button" value="Get Weather" />
            </form>
        );
    }
});

module.exports = WeatherForm;

