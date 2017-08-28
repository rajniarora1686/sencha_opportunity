Ext.define('opportunity.view.westPanel.WestPanel', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'opportunity.view.westPanel.WestPanelController',
        'opportunity.view.westPanel.opportunityGrid.OpportunityGrid'
    ],

    xtype: 'westpanel',
    
    controller: 'westpanel',
    
    tbar: [{
            text: 'New Opportunity',
            handler: 'onClickButton'
        }],
    
    items: [{
            xtype: 'textfield',
            emptyText: 'Search Opportunity',
            name: 'searchOpp',
            padding:10,
                listeners: {
                change: 'onChangeText'
            }
        },{
            xtype: 'oppGrid',
            reference: 'opportunityGrid'
        }
        
    ]
    
});