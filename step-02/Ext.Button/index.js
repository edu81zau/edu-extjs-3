
/**
*
 Использовать createDelegate() - используется в Ext (устарел, не рекомендуется)
 тоже самое сделать через bind();
 где-то использовать стрелочную функцию.

* **/

Ext.onReady( function() {

    const app = {

        //name: 'Demo app 1',
        modules: [{
            name: 'module1',
            showInfo: function(){
                alert("Module name = " +this.name);
            }
        },{
            name: 'module2',
            showInfo: function(){
                alert("Module name = " +this.name);
            }
        }],

        createPanelForScope: function(){
            const config = {
                title: 'Работа с scope',
                border: true,
                height: 150,

                buttons: [
                    {
                        text: 'button1_scope_default',
                        itemId: 'btn1',
                        width: 100,
                        height: 25,
                        handler: function(btn){
                            console.log("createPanelForScope." + btn.itemId, [this,arguments]);
                            console.log("this.name", this.name);
                        }
                    },
                    {
                        text: 'button2_scope_module1',
                        itemId: 'btn2',
                        width: 100,
                        height: 25,
                        scope: this.modules[0],
                        handler: function(btn){
                            console.log("createPanelForScope." + btn.itemId, [this,arguments]);
                            console.log("this.name", this.name);
                            this.showInfo();
                        }
                    },
                    {
                        text: 'button3_scope_module2',
                        itemId: 'btn3',
                        width: 100,
                        height: 25,
                        scope: this.modules[1],
                        handler: function(btn){
                            console.log("createPanelForScope." + btn.itemId, [this,arguments]);
                            console.log("this.name", this.name);
                            this.showInfo();
                        }
                    }
                ]
            };

            const res = new Ext.Panel(config);
            return res;
        },

        createPanelForButtons: function(){

            const self = this;

            const config = {
                title: "Работа с кнопками",
                height: 300,
                modal: true,
                closeAction: 'hide',

                buttons: [
                    {
                        itemId: 'btn1',
                        text: "Кнопка1 показывает другую кнопку",
                        handler: function(btn){
                            console.log("createPanelForButtons." + btn.itemId, [this,arguments]);

                            const btn2 = btn.ownerCt.getComponent('btn2');
                            btn2.show();

                        }
                    },
                    {
                        itemId: 'btn2',
                        text: "Кнопка2 скрывает другую кнопку",
                        hidden: true,
                        handler: function(btn){
                            const btn1 = btn.ownerCt.getComponent('btn1');
                            console.log("createPanelForButtons." + btn.itemId, [this,arguments]);

                            btn1.hide();
                        }
                    },
                    {
                        itemId: 'btn3',
                        text: 'Кнопка3 изменяет другие кнопки',
                        handler: function(btn){
                            const btn1 = btn.ownerCt.getComponent('btn1');
                            const btn2 = btn.ownerCt.getComponent('btn2');
                            console.log("createPanelForButtons." + btn.itemId, [this,arguments]);

                            btn1.show();
                            btn2.hide();

                            btn1.setText("Уже другая надпись");
                            btn1.setIcon('01.jpg');
                        }
                    }
                ],
            };
            const res = new Ext.Panel(config);
            return res;
        },

        run: function() {

            this.panel1 = this.createPanelForScope();
            this.panel2 = this.createPanelForButtons();

            const config = {
                title: "Главное окно",
                width: 850,
                height: 500,
                modal: true,

                items: [
                    this.panel1,
                    this.panel2,
                ]
            };

        this.window = new Ext.Window(config);
        this.window.show();
        },
    };

    app.run();

});