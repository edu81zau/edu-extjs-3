Ext.onReady(function() {
    const config = {
        title: "Изменение размера при нажатии на кнопки",
        width: 400,
        height: 250,
        modal: true,
        closeAction: "hide",

        items:[
            {
                xtype: "button",
                text: "(600x400)",
                handler: function() {
                    win.setSize(600, 400);
                    win.center();
                }
            },{
                xtype: "button",
                text: "(200x100)",
                handler: function() {
                    win.setSize(200, 100);
                    win.center();
                }
            }
        ],
    }
    const win = new Ext.Window(config);
    win.show();
    win.center();
});