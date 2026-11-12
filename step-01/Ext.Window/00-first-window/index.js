Ext.onReady(function() {
    const config = {
        title: "Настройки профиля",
        width: 400,
        height: 250,
        /**
         * Свойство layout со значением "fit" означает, что возьмется первый элемент из
         * items[0] и он заполнит всю рабочую зону родительского элемента.
         * Если items будет несколько, то первый элемент перекроет собой все остальные элементы
         */
        layout: "fit",
        plain: true,
        modal: true,
        closeAction: "hide",

        items: {
            xtype: "panel",
            bodyStyle: "padding: 20px",
            html: "<p>Здесь находятся настройки пользователя ... </p>"
        },

        buttons:[{
            text: 'Сохранить',
            handler: function() {
                Ext.Msg.alert('Успех', 'Данные сохранены!');
                win.hide();
            }
        }, {
            text: 'Отмена',
            handler: function() {
                win.hide();
            }
        }]

    }
    const win = new Ext.Window(config);
    win.show();
})