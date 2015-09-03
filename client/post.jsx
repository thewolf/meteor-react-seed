
Post = React.createClass({
    propTypes: {
        slug: React.PropTypes.string.isRequired
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        var subscription = Meteor.subscribe('post', this.props.slug);
        return {
            ready: subscription.ready(),
            post: Posts.findOne({ slug: this.props.slug })
        };
    },
    render() {
        if (! this.data.ready) {
            return <div>Loading...</div>;
        }
        if (! this.data.post) {
            return <div>404: Not found</div>;
        }
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.data.post.title}</div>
                    <div className="description">{this.data.post.content}</div>
                </div>
            </div>
        );
    }
});


