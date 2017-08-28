/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('opportunity.Application', {
    extend: 'Ext.app.Application',
    
    name: 'opportunity',
   
    stores: [
        // TODO: add global / shared stores here
    ],
    
    controllers: [
        'DataLoader'
    ],
        
    launch: function () {
        // TODO - Launch the application
    }
});
