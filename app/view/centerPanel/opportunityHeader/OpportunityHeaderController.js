Ext.define('opportunity.view.centerPanel.opportunityHeader.OpportunityHeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.opportunityHeader',
    
    beforeInit: function(){
        console.log('in opp header');   
      
    },
    
    listen: {
        controller: {
            '*': {
                loadOpportunityInForm: 'loadOpportunityInForm'
            }
        }  
    },
    
    loadOpportunityInForm: function(row){
        console.log(row);
        this.getView().loadRecord(row);
        
        console.log(this.getViewModel());
        
        // console.log($Params.Accounts);
        

    }
 
});