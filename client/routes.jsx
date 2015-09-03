
FlowRouter.route('/', {
    name: "home",
    action: function() {
        ReactLayout.render(Layout, {
            content: <Home />,
            data: "hatem"
        });
    }
});

FlowRouter.route('/post/:slug', {
    action: function(params) {
        ReactLayout.render(Layout, {
            content: <Post slug={params.slug} />,
            data: "talebi"

        });
    }
});

