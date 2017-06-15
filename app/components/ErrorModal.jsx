var React = require('react'); // residing inside node_modules (installed using npm)

var ErrorModal = React.createClass({
    componentDidMount : function () {
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render: function () {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h1>Sab theek to hain?</h1>
                <p className="lead">Aap ne jo bhi type kiya wo ashleel ya galat hain. </p>
                <p>Koi baat nahi, wapas try kar lo. Agli baar, dhyaan se. </p>
                <button className="button" data-close="">
                    Sorry bhaisaab! Ab galti nahi hogi
                </button>
            </div>
        );
    }
});

module.exports = ErrorModal;