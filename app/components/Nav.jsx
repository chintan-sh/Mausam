/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var {Link, IndexLink} = require('react-router');

var Nav =  React.createClass({
    onFormSubmit : function (e) {
        e.preventDefault();
        var location = encodeURIComponent(this.refs.location.value);

        if(location.length > 0){
            this.refs.location.value = "";
            window.location.hash = "#/?location=" + location;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu >
                        <li className="menu-text">Mausam</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Weather </IndexLink>
                        </li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
                        </li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                            Examples </Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onFormSubmit}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="location" placeholder="City, State or Zip"/>
                            </li>
                            <li>
                                <button className="button">Search</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;



// var Nav = (props) => {
//     return(
//         <div>
//             <h3> Nav Component </h3>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Weather </IndexLink>
//             <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
//             <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
//
//
//
//         </div>

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
//
// {/*<li>*/}
// {/*<a href="#">Language</a>*/}
// {/*<ul className="menu vertical">*/}
// {/*<li><a href="#">EN</a></li>*/}
// {/*<li><a href="#">HI</a></li>*/}
// {/*</ul>*/}
// {/*</li>*/}

//
//
//     );
// };