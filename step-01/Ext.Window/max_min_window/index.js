// Этот код позволяет при нажатии на кнопку "-" свернуть окно до состояния шапки.
// Но оно и разворачивается при нажатии на ту же самую кнопки, причем визуально она не меняется.

// Ext.onReady(function (){
//
//     const win = new Ext.Window({
//
//         title: 'Окно, которое можно сворачивать и развертывать',
//         width: 350,
//         height: 200,
//
//         maximizable: true,
//         minimizable: true,
//
//         closeAction: 'hide',
//
//         x: 100,
//         y: 100,
//         listeners: {
//             minimize: function (win){
//                 if (win.collapsed) {
//                     win.expand();
//                     console.log('Окно развернуто из шапки');
//                 } else {
//                     win.collapse();
//                     console.log('Окно свернуто до заголовка');
//                 }
//             }
//         }
//     });
//     win.show();
// });

Ext.onReady(function(){

    // Включаем глобальные подсказки Ext JS
    Ext.QuickTips.init();

    const config = {

        title: 'Окно, которое можно сворачивать и развертывать',
        width: 350,
        height: 200,
        maximizable: true,

        closeAction: 'hide',
        x: 100,
        y: 100,

        tools:[{

            /*
            * id: 'minus' — задает стандартный идентификатор иконки из библиотеки Ext JS.
            * В данном случае он рисует в шапке окна привычный значок «минус» (черточку).
            * Без этого параметра фреймворк не поймет, какую картинку или спрайт подгрузить из стилей.
             */
            id:'minus',

            //Подсказка, которая всплывает, когда пользователь наводит мышку на кнопку
            qtip: 'Свернуть / Развернуть окно',

            handler: function(event, toolEl, panel){

                if (panel.collapsed){
                    panel.expand();

                    Ext.get(toolEl).removeClass('x-tool-plus');
                    Ext.get(toolEl).addClass('x-tool-minus');

                } else {
                    panel.collapse();

                    Ext.get(toolEl).removeClass('x-tool-minus');
                    Ext.get(toolEl).addClass('x-tool-plus');

                }

            }
        }]
    }
    const win = new Ext.Window(config);
    win.show();
    win.center();
});