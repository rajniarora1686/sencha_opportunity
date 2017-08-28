Ext.define('opportunity.view.westPanel.opportunityGrid.OpportunityGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.opportunityGrid',
        
    listen: {
        controller: {
            '*': {
                loadOpportunitiesDataIntoGrid: 'loadOpportunitiesDataIntoGrid'
            }
        }  
    },
    
    loadOpportunitiesDataIntoGrid: function(data){
        var me=this;
        var store = me.getStore('oppStore');
        store.loadRawData(data.opportunities);
        console.log(data.opportunities[0].attributes.url);
    },
    
    onOppSelect: function(grid, row, index){
        console.log('opp selected  '+row.data.Name); 
        var me = this;
        me.fireEvent('loadOpportunityInForm', row);
        
    }
 
});