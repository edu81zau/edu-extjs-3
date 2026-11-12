Ext.onReady(function () {
    let items = [
        {
            xtype: "panel",
            title: "panel1",
            html: "Конфиг внутри items"
        },
    ];
    items.push(
        {
            xtype: "panel",
            title: "panel2",
            html: "Конфиг передан через items.push"
        },
    );
    items.push(new Ext.Panel(
        {
            title:'panel3',
            html:"Экземпляр объекта Ext.Panel передан через items.push"
        }
    ));
    items.push(Ext.create({
        title: "panel4",
        html: "Панель создана через Ext.create",
    },"panel"));

    const config = {
        title: "Настройки профиля",
        width: 400,
        height: 250,
        plain: true,
        modal: true,
        closeAction: "hide",

        items: items,

        buttons: [{
            text: 'Сохранить',
            handler: function () {
                Ext.Msg.alert('Успех', 'Данные сохранены!');
                win.hide();
            }
        }, {
            text: 'Отмена',
            handler: function () {
                win.hide();
            }
        }]

    }
    const win = new Ext.Window(config);
    win.show();
})