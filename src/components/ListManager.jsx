var React = require("react");
var List = require("./List.jsx");

var ListManager = React.createClass({
    // Only called once. Sets this.state.
    getInitialState: function() {
        return {items: [], newItemText: ""};
    },

    handleSubmit: function(element) {
        // Prevent onClick() to be called.
        element.preventDefault();

        // this.props is only read-only. this.state mutable data.
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);

        // Changes this.state: Update the items list and clear input box.
        this.setState({items: currentItems, newItemText: ""});
    },

    onChange: function(data) {
        // Updates: this.state.newItemText
        this.setState({newItemText: data.target.value});
    },

    render: function() {
        var divStyle = {
            marginTop: 10
        };

        var panelHeadingStyle = {
        };

        var headingFont = {
        };

        // If this exist, set approiate values.
        if (this.props.headingColor) {
            panelHeadingStyle.background = this.props.headingColor;
        };

        if (this.props.headingFont) {
            headingFont.color = this.props.headingFont;
        };

        return (
            <div style = {divStyle} className = "col-xs-12 col-sm-4">
                <div className = "panel panel-primary">
                    <div style = {panelHeadingStyle} className = "panel-heading">
                        <h3 style = {headingFont}> {this.props.title} </h3>
                    </div>

                    <div className = "row panel-body">
                        <form onSubmit = {this.handleSubmit}>
                            <div className = "col-xs-8 col-sm-8">
                                <input className = "form-control" onChange = {this.onChange} value = {this.state.newItemText} />
                            </div>

                            <div className = "col-xs-4 col-sm-4">
                                <button className = "btn btn-primary"> Add </button>
                            </div>
                        </form>
                    </div>

                    <List items = {this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
