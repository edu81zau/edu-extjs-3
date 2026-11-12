// У этого окна нет возможности менять положение окна на экране, но можно менять размер

Ext.onReady(function() {
    const config = {
        title: "Окно без возможности менять положение окна на экране",
        draggable:false,
        modal: true,
    }
    const win = new Ext.Window(config);
    win.show();
})