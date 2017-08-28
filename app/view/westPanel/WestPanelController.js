Ext.define('opportunity.view.westPanel.WestPanelController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.westpanel',
    
    onChangeText: function(field, value){
        var x = this.lookupReference('opportunityGrid').getViewModel().getStore('oppStore');
        x.filter('Name', value);
    }
});