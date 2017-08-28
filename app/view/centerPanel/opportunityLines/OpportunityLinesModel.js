Ext.define('opportunity.view.centerPanel.opportunityLines.OpportunityLinesModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.opportunityLines',
    
    requires: [
        'opportunity.model.OpportunityLine'
    ],

    stores:{
        oppLinesStore: {
            model: 'opportunity.model.OpportunityLine',
            proxy: 'memory'
        }
    }
    
});