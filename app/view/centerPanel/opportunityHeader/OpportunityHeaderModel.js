Ext.define('opportunity.view.centerPanel.opportunityHeader.OpportunityHeaderModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.opportunityHeader',
    
    requires: [
        'opportunity.model.LookupField'
    ],
    
    data: {
        opportunity: 'xyzzzz'  
    },
    
    initViewModel: function(){

        console.log('grid model initialised');
    },
    
    stores: {
        accStore: {
            data: Ext.JSON.decode($Params.Accounts),
            model: 'opportunity.model.LookupField',
            proxy: 'memory'
        }
    }
    
});