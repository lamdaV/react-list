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
        return (
            <div>
                <h3> {this.props.title} </h3>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.onChange} value = {this.state.newItemText} />
                    <button> Add </button>
                </form>
                <List items = {this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
