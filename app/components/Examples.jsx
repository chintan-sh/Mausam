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
                    <h1 className="text-center"> Examples </h1>
                    <p> Slow logon ke liye examples :  </p>
                    <ol>
                        <li>
                            <Link to="/?location=Boston"> Boston </Link> (1st because main yahan rehta hoon)
                        </li>
                        <li>
                            <Link to="/?location=Mumbai"> Mumbai </Link> (2nd because yahan main rehta tha)
                        </li>
                        <li>
                            <Link to="/?location=SanFrancisco "> San Francisco </Link> (Yahan jana hain)
                        </li>
                        <li>
                            <Link to="/?location=London "> London </Link> (Uske baad yahan jana hain)
                        </li>
                    </ol>
            </div>
        );
};

module.exports = Examples;

