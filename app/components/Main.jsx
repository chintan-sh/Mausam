/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function (){
//         return(
//             <div>
//                 <Nav/>
//                 <h2> Main Component </h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var Main = (props) => {
    return(
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;

