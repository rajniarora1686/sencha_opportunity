Ext.define('opportunity.model.Opportunity', {
    extend: 'Ext.data.Model',
    
    fields: [{name: 'url',
        mapping: 'attributes.url'
    },{
        name: 'accountName',
        mapping: 'Account.Name'
    },{
        name: 'campaignName',
        mapping: 'Campaign.Name'
    }],
    
    associations:[
        {type: 'hasMany', model: 'OpportunityLine', name: 'OpportunityLineItems'}
      ]
    
});