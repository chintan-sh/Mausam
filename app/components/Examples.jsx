/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

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
                    <h3> Examples </h3>
                    <p> Welcome to examples page! </p>
            </div>
        );
};

module.exports = Examples;

