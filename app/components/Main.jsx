/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var Nav = require('Nav');

var Main = React.createClass({
    render: function (){
        return(
            <div>
                <Nav/>
                <h2> Main Component </h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

