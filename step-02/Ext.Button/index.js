Ext.onReady( function() {

    const app = {
        name: 'Demo app 1',
        window: undefined,
        run: function() {
            const config = {

                title: "Работа с кнопками",
                width: 800,
                height: 500,
                modal: true,
                closeAction: 'hide',
                items: [{
                    itemId: 'btn1',
                    xtype: 'button',
                    text: "Кнопка1 показывает другую кнопку",
                    handler: function(btn){
                        console.log("btn1 handle",[this,arguments]);

                        const btn2 = btn.ownerCt.getComponent('btn2');
                        btn2.show();
                        // Пересчитываем компоновку контейнера
                        btn.ownerCt.doLayout();

                    }
                },{
                    itemId: 'btn2',
                    xtype: 'button',
                    text: "Кнопка2 скрывает другую кнопку",
                    hidden: true,
                    handler: function(btn){
                        const btn1 = btn.ownerCt.getComponent('btn1');
                        btn1.hide();
                        // btn1.setVisible(false);

                        // Управлять стилями CSS напрямую - нельзя.
                        // Потому что идет расинхронизация состояния объекта и DOM
                        // if (btn1.getEl()){
                        //     btn1.getEl().setStyle('display','none');
                        // }

                        btn1.ownerCt.doLayout();

                    }
                },{
                    itemId: 'btn3',
                    xtype: 'button',
                    text: 'Кнопка3 изменяет другие кнопки',
                    handler: function(btn){
                        const btn1 = btn.ownerCt.getComponent('btn1');
                        const btn2 = btn.ownerCt.getComponent('btn2');

                        btn1.show();
                        btn2.hide();

                        btn1.setText("Уже другая надпись");
                        btn1.setIcon('01.jpg');
                        btn1.getEl().setStyle({
                            'background-color': '#ffcccc',
                            'border-color': '#ff9999',
                        });

                        btn.ownerCt.doLayout();
                    }
                }],

                layout: 'hbox',

                layoutConfig: {
                    align: 'middle', // Выравнивание по вертикали ('top', 'middle', 'bottom')
                    pack: 'center', // Выравнивание по горизонтали ('start', 'center', 'end', 'justify')
                },
            };
        this.window = new Ext.Window(config);
        this.window.show();
        },
    };

    app.run();

    // app.win = new  Ext.Window(config);
    // win.show();
});