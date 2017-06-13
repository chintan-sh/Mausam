/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function (){
//         return(
//             <div>
//                 <h3> Nav Component </h3>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Weather </IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
//             </div>
//         );
//     }
// });

// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var Nav = (props) => {
    return(
        <div>
            <h3> Nav Component </h3>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Weather </IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
        </div>
    );
};

module.exports = Nav;

