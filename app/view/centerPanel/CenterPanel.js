Ext.define('opportunity.view.centerPanel.CenterPanel', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'opportunity.view.centerPanel.CenterPanelController',
        'opportunity.view.centerPanel.opportunityHeader.OpportunityHeader',
        'opportunity.view.centerPanel.opportunityLines.OpportunityLines'
    ],
    
    xtype: 'centerpanel',
    
    controller: 'centerpanel',
    
    tbar: [{
            text: 'Save',
            handler: 'onSaveClick'
        },{
            text: 'Cancel',
            handler: 'onCancelClick'
        }],
    
    items: [{
                xtype: 'oppHeader',
                reference: 'oppHeader'
            },{
                xtype: 'oppLinesGrid'   
            }]
});