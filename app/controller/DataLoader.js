Ext.define('opportunity.controller.DataLoader', {
    extend: 'Ext.app.Controller',
    listen: {
        controller: {
            '*': {
                loadOpportunitiesDataIntoGrid: 'loadOpportunitiesDataIntoGrid'
            }
        }  
    },
    
    loadOpportunitiesDataIntoGrid: function() {
        console.log('called'); 
    },

    onLaunch: function(){

        var opportunities = Ext.JSON.decode($Params.Opportunities);
        console.log(opportunities);
        var me = this;
        me.fireEvent('loadOpportunitiesDataIntoGrid', {
            opportunities: opportunities
        });
        
        
    }
    
});