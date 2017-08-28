Ext.define('opportunity.view.centerPanel.opportunityHeader.OpportunityHeader', {
    extend: 'Ext.form.Panel',
    xtype: 'oppHeader',
    requires: [
            'opportunity.view.centerPanel.opportunityHeader.OpportunityHeaderController',
            'opportunity.view.centerPanel.opportunityHeader.OpportunityHeaderModel'
    ],
    controller: 'opportunityHeader',
    viewModel: 'opportunityHeader',
    
    //title: 'Opportunity Detail',
    padding:10,
    layout:'column',
    defaults: {
        labelAlign: 'top',
       style: {
                margin: '5px'
            }
    },
    
    items: [{
            xtype: 'textfield',
            fieldLabel: 'Opportunity Name',
            name: 'Name'
        },{
            xtype: 'combobox',
            fieldLabel: 'Account',
            name: 'accountName',
            reference: 'accCombo',
            displayField: 'Name',
            bind: {
                store: '{accStore}'
            }
    },{
            xtype: 'pickerfield',
            fieldLabel: 'Stage',
            name: 'StageName'
    },{
            xtype: 'pickerfield',
            fieldLabel: 'Type',
            name: 'Type'
    },{
            xtype: 'pickerfield',
            fieldLabel: 'Lead Source',
            name: 'LeadSource'               
    },{
            xtype: 'checkbox',
            fieldLabel: 'Private',
            name: 'IsPrivate'
    },{
            xtype: 'textfield',
            fieldLabel: 'Next Step',
            name: 'NextStep'
    },{
            xtype: 'numberfield',
            fieldLabel: 'Probability',
            name: 'Probability'
    },{
            xtype: 'pickerfield',
            fieldLabel: 'Primary Campaign Source',
            name: 'campaignName'
    },{
            xtype: 'datefield',
            fieldLabel: 'Close Date',
            name: 'CloseDate'
    },{
            xtype: 'textfield',
            fieldLabel: 'Description',
            name: 'Description'
    }]      
           
});