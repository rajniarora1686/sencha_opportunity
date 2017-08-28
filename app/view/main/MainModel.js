/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('opportunity.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'opportunity'
    },
    
    store: {
        opps:{
        proxy: {
                        type: 'direct',
                    api: {
                                read:   $RemoteAction.getOpportunities
                    },
                       
                    reader: {
                            type: 'json',
                            rootProperty: 'records',
                            messageProperty: 'errorMessage'
                    }
            },
        autoLoad: true
        }
           }

    //TODO - add data, formulas and/or methods to support your view
});