Ext.define('opportunity.view.centerPanel.opportunityLines.OpportunityLinesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.opportunityLines',
    
    beforeInit: function(){
        console.log('in opp lines'+this.lookupReference('oppHeader'));   
      
    }
    
});