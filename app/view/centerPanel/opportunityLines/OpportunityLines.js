Ext.define('opportunity.view.centerPanel.opportunityLines.OpportunityLines', {
    extend: 'Ext.grid.Panel',
    xtype: 'oppLinesGrid',
    requires: [
            'opportunity.view.centerPanel.opportunityLines.OpportunityLinesController'
    ],
    controller: 'opportunityLines',
    
    title: 'opplines',
    bind: {
        store: '{oppStore.OpportunityLineItems}'  
    },
    columns: [{
        text: 'ListPrice',
        dataIndex: 'ListPrice',
        flex:1
    },{
        text: 'Quantity',
        dataIndex: 'Quantity',
        flex:1
    }],
    listeners: {
        select: 'onOppSelect'
    }
});