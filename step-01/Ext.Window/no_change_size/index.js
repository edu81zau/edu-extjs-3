// У этого окна нет возможности менять размер, но можно менять положение окна на экране

Ext.onReady(function() {
    const config = {
        title: "Окно без возможности менять размер",
        resizable: false,
        modal: true,
    }
    const win = new Ext.Window(config);
    win.show();
})

