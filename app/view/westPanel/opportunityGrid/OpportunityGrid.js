Ext.define('opportunity.view.westPanel.opportunityGrid.OpportunityGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'oppGrid',
    requires: [
            'opportunity.view.westPanel.opportunityGrid.OpportunityGridController',
            'opportunity.view.westPanel.opportunityGrid.OpportunityGridModel'
    ],
    controller: 'opportunityGrid',
    viewModel: 'opportunityGrid',
    bind: {
        store: '{oppStore}'  
    },
    title: 'Name',
    header:false,
    columns: [{
        text: 'Name',
        dataIndex: 'Name',
        flex:1
    }],
    listeners: {
        select: 'onOppSelect'
    }
});
    