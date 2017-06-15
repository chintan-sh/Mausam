/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

// var About = React.createClass({
//     render: function (){
//         return(
//             <h3> About Component </h3>
//         );
//     }
// });

// refactored the above code as it doesnt manage any state (called Stateless Functional Component)
var About = (props) => {
        return(
            <div>
                    <h1 className="text-center"> About  </h1>
                    <p> Website bhaade par host kari hain on <a href="https://heroku.com" target="_blank">Heroku</a> aur baaki ka kaam inn tools pe hua hai: </p>
                    <ul>
                        <li>
                            <a href="https://facebook.github.io/react" target="_blank">React</a>
                        </li>
                        <li>
                            <a href="https://openweathermap.org" target="_blank">Open Weather Map</a>
                        </li>
                        <li>
                            <a href="https://nodejs.org" target="_blank">NodeJS</a>
                        </li>
                        <li>
                            <a href="https://babeljs.io" target="_blank">Babel</a>
                        </li>
                        <li>
                            <a href="https://webpack.github.io/" target="_blank">Web Pack</a>
                        </li>
                        <li>
                            <a href="https://jquery.com" target="_blank">jQuery</a>
                        </li>
                        <li>
                            <a href="https://foundation.zurb.com/" target="_blank">Foundation</a>
                        </li>
                    </ul>
                    <p> Jaan liya sab? Kuch faayda hua? </p>
            </div>
        );
};

module.exports = About;

