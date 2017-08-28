Ext.define('opportunity.view.westPanel.opportunityGrid.OpportunityGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.opportunityGrid',
    
    requires: [
        'opportunity.model.Opportunity'
    ],

    stores:{
        oppStore: {
            model: 'opportunity.model.Opportunity',
            proxy: 'memory'
        }
    },

    initViewModel: function(){

        console.log('grid model initialised');
    }
    
});
    