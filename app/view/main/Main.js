/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('opportunity.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'opportunity.view.main.MainController',
        'opportunity.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border',
        padding: 6
    },
    title: 'Manage Opportunities',
    
    items: [{
        xtype: 'westpanel',
        region: 'west',
        width: 250
    },{
        region: 'center',
        xtype: 'centerpanel'
    }]
});
