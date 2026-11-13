Ext.onReady(function(){

    const config ={

        title:'Окно с ограничениями размеров',

        autoWidth: true,
        autoHeight: true,

        minWidth: 250,
        maxWidth: 500,
        minHeight: 150,
        maxHeight: 300,

        autoScroll: true,

        closeAction: "hide",
        layout:'fit',

        items:{
            xtype: "textarea",
            html: "Под введенный текст здесь будет подстраиваться размер окна..."
        },
    }

    const win = new Ext.Window(config);
    win.show();
    win.center();

});