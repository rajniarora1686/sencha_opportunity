Ext.define('opportunity.view.centerPanel.opportunityLines.OpportunityLinesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.opportunityLines',
    
    listen: {
        controller: {
            '*': {
                loadOpportunityLinesInGrid: 'loadOpportunityLinesInGrid'
            }
        }  
    },
    
    beforeInit: function(){
        console.log('in opp lines'+this.lookupReference('oppHeader'));   
        
    },
    
    loadOpportunityLinesInGrid: function(row){
        console.log(row.data.OpportunityLineItems);
        var oppLinesStore = this.getStore('oppLinesStore');
        if(row.data.OpportunityLineItems)
            oppLinesStore.loadRawData(row.data.OpportunityLineItems.records);
        else
            oppLinesStore.loadRawData(null);
        console.log(oppLinesStore);
    }
    
});