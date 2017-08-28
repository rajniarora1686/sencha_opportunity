Ext.define('opportunity.view.centerPanel.opportunityLines.OpportunityLines', {
    extend: 'Ext.grid.Panel',
    xtype: 'oppLinesGrid',
    requires: [
            'opportunity.view.centerPanel.opportunityLines.OpportunityLinesController',
            'opportunity.view.centerPanel.opportunityLines.OpportunityLinesModel'
    ],
    controller: 'opportunityLines',
    viewModel: 'opportunityLines',
    tbar: [{
        text: 'Add From Pricebook'  
    }],
    
    bind: {
        store: '{oppLinesStore}'  
    },
    columns: [{
        text: 'Product Name',
        dataIndex: 'productName',
        flex:1
    },{
        text: 'Quantity',
        dataIndex: 'Quantity',
        flex:1
    },{
        text: 'SalesPrice',
        dataIndex: 'UnitPrice',
        flex:1
    },{
        text: 'TotalPrice',
        dataIndex: 'TotalPrice',
        flex:1
    },{
        text: 'Description',
        dataIndex: 'Description',
        flex:1
    }]
});