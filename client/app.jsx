App = React.createClass({

    componentDidMount: function() {
        console.log('App mounted.');
    },

    componentDidUpdate: function() {
        console.log('App updated.');
    },

    render: function() {
        return (
            <div className="ui container">
                <h3>Hello reactjs</h3>
            </div>
        );
    }

});
