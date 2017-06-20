/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function (){
//         return(
//             <h3> Examples Component </h3>
//         );
//     }
// });

// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var Examples = (props) => {
        return(
            <div>
                    <h1 className="text-center page-title"> Examples </h1>
                    <p> Quick examples :  </p>
                    <ol>
                        <li>
                            <Link to="/?location=Boston"> Boston </Link>
                        </li>
                        <li>
                            <Link to="/?location=Mumbai"> Mumbai </Link>
                        </li>
                        <li>
                            <Link to="/?location=SanFrancisco"> San Francisco </Link>
                        </li>
                        <li>
                            <Link to="/?location=London"> London </Link>
                        </li>
                    </ol>
            </div>
        );
};

module.exports = Examples;

