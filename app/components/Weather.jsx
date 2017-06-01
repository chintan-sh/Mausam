/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

var Weather = React.createClass({
    render: function (){
        return(
            <h3> Weather Component </h3>
        );
    }
});

module.exports = Weather;

