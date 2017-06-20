var React = require('react'); // residing inside node_modules (installed using npm)
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps : function() {
        return{
            title : 'Something went wrong!'
        };
    },
    propTypes : {
        title : React.PropTypes.string,
        message : React.PropTypes.string.isRequired,
    },
    componentDidMount : function () {
      var {title, message} = this.props;
      var markup  = (
          <div id="error-modal" className="reveal tiny text-center" data-reveal="">
              <h1>{title}</h1>
              <p className="lead">An error occured while processing your request</p>
              <p>{message} </p>
              <button className="button" data-close="">
                  OK
              </button>
          </div>
      );

      var $modal = $(ReactDOMServer.renderToString(markup));
      $(ReactDOM.findDOMNode(this)).html($modal);

      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;

