Layout = React.createClass({

    render() {

        return (
            <div className="ui container">

                <Menu />

                <div >
                    {this.props.content}
                </div>

            </div>
        );
    }

});

