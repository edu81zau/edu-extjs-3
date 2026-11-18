
/**
 * Создать две панели
 * На одну панель перенести текущую логику
 * На другой панели будет демонстрировать работа со scope
 * createPanel1 createPanel2 - функциональные имена дать панелям
 * */

/**
 *
 Сделать тоже самое без layout
 кнопки передать через свойство buttons[] panel

 каждой кнопке сделать handler который будет содержать строчку:
 console.log(nameButton,[this,arguments]);
 при нажатии на кнопку,смотреть в консоле, что происходит
 передавать в button
 scope:this

 scope: app.modules[0]
 scope: app.modules[1]
 тоже самое сделать через bind();

 где-то использовать стрелочную функцию.
 * **/

Ext.onReady( function() {

    const app = {

        name: 'Demo app 1',
        modules: [{
            name: 'module1',
        },{
            name: 'module2',
        }],

        window: undefined,

        createPanelForScope: function(){
            const config = {
                title: 'Работа с scope',
                border: true,
                height: 150,
                // layout: 'hbox',
                //
                // layoutConfig: {
                //     align: 'middle', // Выравнивание по вертикали ('top', 'middle', 'bottom')
                //     pack: 'center', // Выравнивание по горизонтали ('start', 'center', 'end', 'justify')
                // },
                // // layoutConfig: {
                // //     pack: 'start',    // Выравнивание по левому краю (или 'center')
                // //     align: 'middle'   // Выравнивание по вертикали
                // // },

                buttons: [
                    {
                        xtype: 'button',
                        text: 'button1',
                        width: 100,
                        height: 25
                    },
                    {
                        xtype: 'button',
                        text: 'button2',
                        width: 100,
                        height: 25,
                    }
                ]

                // tbar:[
                //     {
                //         text: 'button1',
                //         width: 100,
                //         height: 20,
                //     },{
                //         text: 'button2',
                //         width: 100,
                //         height: 20,
                //     }
                // ]

                // autoHide: true,
                // buttons: [
                //     {
                //         text: 'button1',
                //         width: 100,
                //         height: 20,
                //     },{
                //         text: 'button2',
                //         width: 100,
                //         height: 20,
                //     }
                // ]
            };

            const res = new Ext.Panel(config);
            return res;
        },

        createPanelForButtons: function(){

            const config = {
                title: "Работа с кнопками",
                height: 300,
                modal: true,
                closeAction: 'hide',

                tbar: [ {
                    itemId: 'btn1',
                    xtype: 'button',
                    text: "Кнопка1 показывает другую кнопку",
                    handler: function(btn){
                        console.log("btn1 handle",[this,arguments]);

                        const btn2 = btn.ownerCt.getComponent('btn2');
                        btn2.show();
                        // Пересчитываем компоновку контейнера
                        // btn.ownerCt.doLayout();

                    }
                },{
                    itemId: 'btn2',
                    xtype: 'button',
                    text: "Кнопка2 скрывает другую кнопку",
                    hidden: true,
                    handler: function(btn){
                        const btn1 = btn.ownerCt.getComponent('btn1');
                        btn1.hide();
                        // btn1.ownerCt.doLayout();
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
                        // btn1.getEl().setStyle({
                        //     'background-color': '#ffcccc',
                        //     'border-color': '#ff9999',
                        // });

                        //btn.ownerCt.doLayout();
                    }
                }],
                // layout: 'hbox',
                //
                // layoutConfig: {
                //     align: 'middle', // Выравнивание по вертикали ('top', 'middle', 'bottom')
                //     pack: 'center', // Выравнивание по горизонтали ('start', 'center', 'end', 'justify')
                // },

            };
            const res = new Ext.Panel(config);
            return res;
        },

        run: function() {

            const panel1 = this.createPanelForScope();
            const panel2 = this.createPanelForButtons();
            // panel1.flex = 1;
            // panel2.flex = 1;


            const config = {
                title: 'main window',
                width: 850,
                height: 500,
                modal: true,

                // layout: 'vbox',
                // layoutConfig: {
                //     align: 'stretch'
                // },

                items: [
                    panel1,
                    panel2,
                ]
            };

            this.window = new Ext.Window(config);
            this.window.show();
        },
    };

    app.run();

});