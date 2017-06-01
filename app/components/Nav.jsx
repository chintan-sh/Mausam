/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function (){
        return(
            <div>
                <h3> Nav Component </h3>
                <Link to="/"> Weather </Link>
                <Link to="/about"> About </Link>
                <Link to="/examples"> Examples </Link>
            </div>
        );
    }
});

module.exports = Nav;

