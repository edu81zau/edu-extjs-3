Ext.onReady( function() {

    const config ={
        title: 'Example of a panel with all zones',
        width: 400,
        height: 300,
        renderTo: Ext.getBody(),
        border: true,
        bodyStyle: 'padding:20px; background:#fff;',

        tbar :[{
            text: 'Action 1'
        }],

        html: '<p>This is the main text inside the body of the panel....</p>',

        bbar: ['Status text'],

        buttons: [{
            text:'Ok',
            handler: function() {alert('Press Ok');}
        }]
    };

    const panel = new Ext.Panel(config);


});