Ext.onReady(function (){

    const config = {
        title: 'Окно управления',

    }

    let itemsWindow = [];

    for (let i=0; i<=2; i++){
        const win = new Ext.Window({
            id: 'win-' + (i+1),
            title: 'Окно №' + (i+1),
            width: 300,
            height: 150,
            closeAction: 'hide',
            layout: 'fit',
            items:{
                xtype: 'textarea',
                html: 'Привет! Я окно под номером ' + (i+1),
            },
            x: 100 + (i*300),
            y: 10 ,
        });
        itemsWindow.push(win);
    }

    const winControl = new Ext.Window({
        title: 'Панель управления окнами',
        width: 380,
        height: 140,
        layout: 'fit',
        items:{
            xtype: 'panel',
            html: 'Используйте кнопки для управления окнами',
        },

        buttons:[{
                text: 'Показать все',
                handler: function(){
                    itemsWindow.forEach(function (win) {
                        win.show();
                    });

                    // for (let i=0; i<=2; i++){
                    //     const win = itemsWindow[i];
                    //     if (win){
                    //         win.show();
                    //     }
                    // }

                }
            },
            {
                text: 'Скрыть все',
                handler: function () {
                    itemsWindow.forEach(function (win) {
                        win.hide();
                    });
                },
            }
        ]
    })
    winControl.show();
    winControl.center();
});