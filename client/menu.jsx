Menu = React.createClass({

    isRouteActive(route) {
        var current = FlowRouter.current();
        if(current && (current.path === route)) {
            return "item active";
        }

        return "item";
    },

    render() {
        var self = this;
        var current = FlowRouter.current();
        var items = [
            {
                link: "/",
                label: "Home"
            },
            {
                link: "/post/post-1",
                label: "Post 1"
            },
            {
                link: "/post/post-2",
                label: "Post 2"
            },
            {
                link: "/post/post-3",
                label: "Post 3"
            },
        ];
        return(
            <div className="ui menu">
                {
                    items.map(function(item, i){
                        return (
                            <a key={i} href={item.link} className={self.isRouteActive(item.link)} >
                                {item.label}
                            </a>
                        )
                    })
                }
            </div>
        );
    }
});

