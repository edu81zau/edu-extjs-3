Ext.onReady(function() {
    const config = {
        title: "Окно без размера",
        modal: true,
    }
    const win = new Ext.Window(config);
    win.show();
});