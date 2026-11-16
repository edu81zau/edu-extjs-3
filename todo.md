--------------------------------------------------------------------------------
-- Участники
--------

-- Крупина Кирилл
https://github.com/KirillKrupina
https://github.com/KirillKrupina/extjs-samples

-- Капуста Максим
https://github.com/MaximKaputa

-- Росохатый Константин
https://github.com/KostiantynRosokhatyj

--------------------------------------------------------------------------------
-- Крок 0
-- 
Джерела інформації, базова структура HTML
---------

* Документація по Ext3
  https://docs.sencha.com/extjs/3.4.0/
* Оригінальні приклади для Ext3.
  http://cdn.sencha.com/ext/gpl/3.4.1.1/examples
* Вани приклади
  c:\Users\USER\work\dio\samples\web-stuff\ZahlyadaIM\

````HTML
<!--Базова структура HTML-->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../../../extjs/3.4.0/resources/css/ext-all.css"/>
    <script type="text/javascript" src="../../../extjs/3.4.0/adapter/ext/ext-base-debug.js"></script>
    <script type="text/javascript" src="../../../extjs/3.4.0/ext-all-debug.js"></script>
    <!--
      <script type="text/javascript"          src="../../../extjs/3.4.0/adapter/ext/ext-base.js"></script>
      <script type="text/javascript"          src="../../../extjs/3.4.0/ext-all.js"></script>
    -->
</head>
<body>
</body>
</html>
<script>
    Ext.onReady(function () {

        // Тут работаем с ExtJs
        new Ext.Window({ // Ext.Window
            title: 'aaa',
            items: [{
                xtype: 'form', // Ext.form.FormPanel
                layout: 'form',
                items: [{
                    xtype: 'textfield', // Ext.form.TextField
                    fieldLabel: 'Hello, label'
                }]
            }]
        })
    ).
        show()

    });
</script>
````

--------------------------------------------------------------------------------
-- Крок 1
--------
Вивчаємо.

* Ext.Window
* Ext.Button
* Ext.Panel
* Ext.form.FormPanel
* Ext.form.Label
* Ext.form.TextField

--------------------------------------------------------------------------------
-- Крок 2
--------

Ці компоненти можна переглянути побіжно, лише щоб запам'ятати, що вони є (вони прості).

* Ext.form.TextArea
* Ext.form.NumberField
* Ext.form.SliderField
* Ext.form.DisplayField
* Ext.ColorPalette

Це потрібно пощупати руками. Можливо, виникнуть труднощі з форматом дати.
https://docs.sencha.com/extjs/3.4.0/#!/api/Date

* Ext.form.DateField

З цими треба погратися і зробити тестову "демо-сторінку".
Роби так, щоб потім тобі було легко підглянути і швидко зрозуміти, як використовувати.
http://cdn.sencha.com/ext/gpl/3.4.1.1/examples/form/check-radio.html

* Перемикачі
  Ext.form.Checkbox
  Ext.form.CheckboxGroup
  Ext.form.Radio
  Ext.form.RadioGroup
* Разом із ними ознайомся з принципом роботи з формами.

````JS
// Ext.form.FormPanel
var formPanel = new Ext.form.FormPanel({...}); // Це панель, яка надає інтерфейс.
// Ext.form.BasicForm
var form = formPanel.getForm();


form.reset();
//-- повісити на кнопку

form.submit();
--спрацьовувати
при
натисканні
кнопки
--вивести
значення
в
консоль
--перехватити
submit
і
підмінити
значення

console.log('form values', form.getValues());
form.setValues({
    X1: 'value X1',
    X2: 'value X2'
    // ,  ...
});

var fieldX1 = form.findField('X1');
fieldX1.getValue();
fieldX1.setValue('.....');
fieldX1.enable();
fieldX1.hide();


// опрацювати варіанти валідації
{
    monitorValid : true // шукати в документації
}

form.isValid();
form.validate();
clientvalidation // шукати в документації

````

Далі.

* Ext.form.FieldSet
* Ext.TabPanel

Далі концепція Layout. Приступати зі свіжою головою.
Головне, що потрібно зрозуміти, layout : 'XXXYYY' задається в батьківському компоненті-контейнері, а керує дочірніми
items :[...]

* Ext.Container - базовий компонент, для нащадків якого можна налаштовувати властивість "layout"
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Container-cfg-layout
  Valid layout type values are:  absolute; accordion; anchor; auto Default; border; card; column; fit; form; hbox; menu;
  table; toolbar; vbox
* Приклади Sencha Layout Managers
  http://cdn.sencha.com/ext/gpl/3.4.1.1/examples/#sample-9

Рекомендую таку послідовність вивчення:

* Ext.layout.FitLayout
* Ext.layout.AccordionLayout
* Ext.layout.Absolute
* Ext.layout.Column
* Ext.layout.HBoxLayout
* Ext.layout.VBox ??? **Ext.layout.VBoxLayout
* Ext.layout.Form - Это ранее использовалось в Ext.form.FormPanel
* Ext.layout.BorderLayout

````JS
{
    xtype : 'container', // 'panel' и т.д.
}
````

<hr>

# Крок 3

1. Ext.form.ComboBox
    1. Ext.form.ComboBox з Ext.data.ArrayStore

````JS
// данні в масиві 
var moduleData = {
        "success": true,
        "data": {
            "reeType": [
                {
                    "ID": -1000,
                    "NAME": "Реєстр адміністраторів AISTCV"
                },
                {
                    "ID": -999,
                    "NAME": "Реєстр адміністраторів NAIS"
                }
            ]
        }
    },
    comboArrayData = moduleData.data.reeType
````

    2. Ext.form.ComboBox з Ext.data.JsonStore

Данні тянути звідси
url: http://localhost:7081/ree/ree-type/list

````JS
// пример конфига
// sai-web.trunk/application/modules/abd/views/scripts/abd-docs-pack-lost/index/createWindowDocumentEdit.js
const config = {
    xtype: 'combo',
    fieldLabel:
        'Тип документу',
    name:
        'TDOC_ID',
    hiddenName:
        'TDOC_ID',
    valueField:
        'ID',
    displayField:
        'NAME',
    mode:
        'local',  // ??? Hежим работі фильтра - локадьно или удаленно
    selectOnFocus:
        true,
    triggerAction:
        'all',  // что вібирать при клике на иконку раскрівающегося списка
    forceSelection:
        true,
    typeAhead:
        true,
    minChars:
        1,
    // lastQuery : '', // имеет значение для JsonStore
    store:
        {
            xtype: 'jsonstore',
            autoDestroy:
                true,
            autoLoad:
                true,
            url:
                '/abd/abd-docs-lost-type/list',
            root:
                'rows', // из какой ноді JSON брать данніе
            idProperty:
                'ID',
            fields:
                ['ID', 'NAME'],
            listeners:
                {
                    // exception : Application.Helper.storeException  // Yавесить свой listener. 
                }
        }
}
````

2. Ext.grid.GridPanel
    1. Ext.data.ArrayStore
    2. Ext.data.JsonStore
   ````JS
   // URL: http://localhost:7081/ree/ree-type/list
   ````

---

## Крок 4

````TEXT
План:
* Рассказать, где лежат не сбандленные исходники ExtJs.
* Настройка PhpStorm для удобного поиска классов по клику.
* События в Ext3. 
* Созданиеb
````

0. Прочитати базову інформацію про компонент Ext.util.Observable, яка надає можливість оперувати подіями.
   Всі компоненти Ext3 успадковують від цього компонента.

````
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.util.Observable
````

````JS
// разобрать пример
var myEventManager = new Ext.util.Observable();

myEventManager.addEvents({
    'my-event-1': true
});

myEventManager.addListener('my-event-1', function () {
    console.log('біло візвано собітие \'my-event-1\' и мі его поймали', arguments);
});

myEventManager.addListener('my-event-1', function () {
    console.log('слушатель 2. біло візвано собітие \'my-event-1\' и мі его поймали', arguments);
});

setInterval(() => {
    myEventManager.fireEvent('my-event-1', 'arg1', 'aaaa', 222);
}, 3000);

````

1. Практика. Події на полях форми. Потрібно зробити форму з трьома текстовими полями.
   На поля повісити події, при спрацьовуванні яких виводити в консоль інформацію про подію.

````TEXT
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Window-event-show               + Обявлено в Ext.Component розбирать для Window
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component-events-show         - Спрацьовує після того, як компонент показано під час виклику методу show.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Window-event-beforerender       + для Window
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component-events-beforerender - Спрацьовує перед відтворенням компонента. Повернути false з обробника події, щоб зупинити візуалізацію.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Window-event-render             + для Window
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component-events-render       - Спрацьовує після відтворення розмітки компонента.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component-event-beforeshow      - Працює перед тим, як компонент буде показано за допомогою виклику методу show.

https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-event-change          + TextField
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Element-event-change               - Спрацьовує, коли елемент керування втрачає фокус введення, а його значення було змінено після отримання фокусу.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-event-afterrender 
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component-event-afterrender        - Запускається після завершення візуалізації компонента.         
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-event-focus
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Element-event-focus                - Спрацьовує, коли елемент отримує фокус або за допомогою вказівного пристрою, або шляхом навігації за допомогою клавіші Tab.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-event-blur
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Element-event-blur                 - Спрацьовує, коли елемент втрачає фокус через вказівний пристрій або навігацію за допомогою вкладок.
--
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-event-keydown
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Element-event-keydown              - Спрацьовує при виявленні натискання клавіші всередині елемента.
https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-cfg-enableKeyEvents   - true, щоб увімкнути проксі-сервер ключових подій для поля введення HTML (за замовчуванням значення false)

````

2. Практика. Події в GridPanel і JsonStore.
   Потрібно зробити вікно з грідом та панеллю Ext.form.FormPanel.
   При зміні активного запису гріда витягувати дані запису та розподіляти їх по полях форми.  
   url: http://localhost:7081/ree/ree-type/list  (по цьому URL затримка 5 секунд для тесту загрузки)
   http://localhost:7081/ree/ree-type/list?enable-errors=1&force-error=1
   в тулбарі гріда додати кнопку "оновити" при натисканні на яку перезавантажувати дані в store.
   на час завантаження даних накласти маску на grid (конфігураційна властивість mask, або виклик "grid.getEl()
   .mask(...)")
   якщо при завантаженні даних виникла помилка, то її потрібно коректно опрацювати
   http-200, success : false - вивести message
   HTTP-400 - вивести 'дані не завантажено'
   2.1. Ознайомитися з подіями, які виникають під час завантаження даних у Store
    ````TEXT
     https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.data.JsonStore-event-load         + JsonStore поиграться с Combo  и  Grid
     https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.data.JsonStore-event-beforeload   + JsonStore поиграться с Combo  и  Grid
     https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.data.JsonStore-event-exception    + обробка помилок завантаження даних
    ````
   2.2. Отримання поточного запису
   ````TEXT
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.grid.GridPanel
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.grid.GridPanel-cfg-sm
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.grid.RowSelectionModel
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.grid.RowSelectionModel-event-selectionchange
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.data.Record
    ````
   2.3. Робота з формою (вспоминаем "Крок 2")
    ````TEXT
    https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.BasicForm-method-setValues
    // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.BasicForm-method-findField
    // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.Field-method-setRawValue
    // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TextField-method-setValue
    // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.NumberField-method-setValue
    // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.DateField-method-setValue
    ````

````JS
// додавання кнопки в тулбар гріда після рендерингу компонента
// https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Toolbar
grid.on({
    scope: this,
    render: function (grid) {
        var
            buttonReload = Ext.create({
                xtype: 'button',
                itemId: 'buttonReload',
                text: 'завантажити',
                iconCls: 'load-16',
                style: 'marginRight : 5px',
                disabled: true,
                scope: this,
                handler: function () {
                    store.reload(); // <<< перезагружаем store в гриде. должна накладіваться маска.
                }
            }),
            buttonShow = Ext.create({
                xtype: 'button',
                itemId: 'buttonShow',
                text: 'Перегляд',
                iconCls: 'show-16',
                style: 'marginRight : 5px',
                disabled: true,
                scope: this,
                handler: function () {
                    // ...
                }
            })
        ;
        grid.getBottomToolbar().add(
            '->',
            buttonReload,
            buttonShow
        );
    };
}
})
;

// (вспоминаем "Крок 2")
grid.getStore().on({
    scope: this,
    beforeload: function (store) {
        cosole.log('store/beforeload', arguments)
        store.setBaseParam('USER_NAME', 'Вася');
    },
    load: function (store, records, options) {
        cosole.log('store/load', arguments)
    }
});

grid.getSelectionModel().on('selectionchange', function (selectionModel) {
    cosole.log('grid/selectionmodel/selectionchange', arguments)
    var record = selectionModel.getSelected();
});
````

--------------------------------------------------------------------------------
-- Шаг 5
--
-- ООП
-- Запланировано на 2020-03-20(Пт), либо 2020-03-24(Вт)
---------

---------
-- 5.1 ООП в JavaScript
@TODO: подготовить материалы

---------
-- 5.2 ООП в TypeScript
@TODO: подготовить материалы

---------
-- 5.3 ООП в ExtJs

1. Вспомогательные методы
   1.1. Связанные с объектами

+ Ext.ns
+ Ext.apply
+ Ext.applyIf
+ Ext.copyTo
  1.2. Общего назначения (проверка типов)
+ Ext.isEmpty
+ Ext.isArray
+ Ext.isObject
+ Ext.isFunction
  Ext.is* - проверка типов компонент.
  ... все остальное используется редко

2. Основные методы
   X Ext.define

+ Ext.extend
+ Ext.override
+ Ext.reg

---------
-- Практичні задачі.

-- Практична задача 1.

1. Постановка.
   Створити компонент App.Components.TextFieldUpperCase з xtype 'textfielduppercase'.
   При введенні символів у це поле, вони повинні переводитися у верхній регістр.

2. Тестове вікно
   На тестовій формі размістити два поля типу 'textfielduppercase' і одне поле
   'textfield'.

------------------------------------------
: Тестове вікно з формою              [X]:
:----------------------------------------:
: textfielduppercase1: [...]             :
: textfielduppercase2: [...]             :
: textfield1:          [...]   [button1] :
:----------------------------------------:
:           [buttonSubmit] [buttonClose] :
------------------------------------------
2.1. При ручному введенні тексту в компонент типу "textfielduppercase", текст
повинен переводитися в верхній регістр.
2.2. При натисканні на кнопку "button1" значення поля "textfield1" має копію-
ватися у поля "textfielduppercase1" та "textfielduppercase2". При цьому
компоненти типу "textfielduppercase" повинні автоматично переводити значення у
верхній регістр.
2.3. При натисканні на кнопку "buttonSubmit" у консоль потрібно вивести значення
всіх полів форми.
2.4. При натисканні на кнопку "buttonClose" потрібно закривати тестове вікно.

---------
-- Практична задача 2.

1. Постановка.
   Створити компонент App.Components.UserInfo з xtype 'userinfofield'.
   Базовий клас "trigger"
   https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.form.TriggerField
   Поле 'userinfofield' повинно зберігати інформацію про користувача.
   Набір інформації наступний: Прізвище, Ім'я, По батькові, Дата народження, Стать.
   Дані для встановлення значення поля. Припустимо, поле називається "userinfofield1".

````JS
    //1. Получаем данные для передачи в поле "userinfofield1"
var jsonString = JSON.stringify({
    name1: 'Іванов', // Фамилия
    name2: 'Іван', // Имя
    name3: 'Іванович', // Отчество
    birthday: (new Date()).format('d.m.Y'), // Дата рождения
    sex: 'M' // Стать M - male, F - female
});
console.log('jsonString', jsonString);
// jsonString '{"name1":"Іванов","name2":"Іван","name3":"Іванович","birthday":"17.03.2020","sex":"M"}'

// 2. Передача в поле "userinfofield1".
// Увага! На вхід методу setValue передаємо рядок у форматі JSON.
userinfofield1.setValue(jsonString);
var jsonObj = JSON.parse(jsonString); // Всередині поля з рядка отримуємо об'єкт.
console.log('jsonObj', jsonObj);

// 3. Отримання даних поля "userinfofield1"
// Увага! На виході методу getValue отримуємо рядок у форматі JSON.
var jsonString = userinfofield1.getValue();
````

2. Тестове вікно.

-------------------------------------------------
: Тестове вікно з формою                     [X]:
:-----------------------------------------------:
: userinfofield1:[...][+][x]                    :
: userinfofield2:[...][+][x]                    :
: textfield1:    [...][get][set]                :
:-----------------------------------------------:
:    [buttonReset] [buttonSubmit] [buttonClose] :
-------------------------------------------------

2.1. Поле "userinfofield1".
2.1.1. При натисканні кнопки [x] поля  "userinfofield1", поле "userinfofield1"
потрібно очистити.
2.1.2. При натисканні кнопки [+] поле "userinfofield1" потрібно відобразити модальне
вікно для встановлення значень поля.
Увага! Це вікно має бути інкапсульоване в клас 'userinfofield'. При цьому поля форми
"Інформація про користувача" мають бути встановлені відповідно до значення, яке зберігається
в "userinfofield1".
------------------------------------------
: Інформація про користувача          [X]:
:----------------------------------------:
: name1:    [...]                        :
: name2:    [...]                        :
: name3:    [...]                        :
: birthday: [...][#]                     :
: sex:      (*) Male      ( ) Female     :
:----------------------------------------:
:           [buttonSubmit] [buttonClose] :
------------------------------------------
При натисканні кнопки "buttonSubmit" потрібно зібрати значення полів з форми в рядок JSON
і записати в поле "userinfofield1" на формі "Тестове вікно з формою".
При натисканні кнопки "buttonClose" потрібно закрити вікно "Інформація про користувача".

2.2. Поле "textfield1"
2.2.1. При натисканні кнопки "get" поля "textfield1" потрібно отримати значення поля
"userinfofield1" і записати його у поле "textfield1".
2.2.2. При натисканні кнопки "set" поля "textfield1", потрібно передати значення поля
"textfield1" до полів "userinfofield1" і "userinfofield2".
Тобто ми створюємо рядок JSON з різними даними, копіюємо його в поле "textfield1",
натискаємо "set", відкриваємо форму, натискаючи на "[+]" і перевіряємо, що поля форми
відповідають даним JSON.

2.3. Кнопки вікна "Тестове вікно з формою"
2.3.1. "buttonReset" - очистити всі поля форми.
formPanel.getForm().reset()
2.3.2. "buttonSubmit" - отримати значення полів форми
formPanel.getForm().getValues()
2.3.2. "buttonClose" - закрити вікно "Тестове вікно з формою"

--------------------------------------------------------------------------------
-- Шаг 6.
-- 
-- Тема: AJAX.
-- @TODO: Подумать, как лучше выложить материалл.
---------

6.1 Рассказать о принципах сетевого взаимодействия в глобальной и локальной сетях.
TCP/IP
Ethernet
Зачем нужен порт.
Как работают сетевые приложения.
Протокол HTTP. Методы запросов, заголовки, кукиесы.

* Поднять Web-сервер.
  Подумать, что лучше.
  NodeJs, встроенный PHP сервер, docker + apache, OpenServer.
  Т.к. все на винде, склоняюсь к OpenServer.

+ Мы работаем с PHP
+ В нем можно переключать версии PHP.

- Ребятам может быть непонятно.

6.2. Простые HTTP запросы.

* Выполнить запросы с использованием XMLHttpRequest.
  https://learn.javascript.ru/xmlhttprequest
* Выполнить запросы с использованием JQuery.
* Выполнить запросы с использованием ExtJs.
  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Ajax-method-request

6.3. Кроссдоменные HTTP запросы.
https://learn.javascript.ru/xmlhttprequest#zaprosy-na-drugoy-istochnik
https://learn.javascript.ru/fetch-crossorigin

Задачи:

* написать сайт для отображения статистики по коронавирусу.
  ** Данные для формы.
  https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/
  https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv
  ** Пример расчета.
  См. колонки "Летальность текущая" и "Летальность условная"
  https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F_COVID-19
  ** https://developer.github.com/v3/
  GitHub API v3 | GitHub Developer Guide"
  ** Преобразование CSV в JSON.
  Описание формата: https://tools.ietf.org/html/rfc4180#page-2
  Готовая библиотека: https://www.csvjson.com/csv2json
  Можно использовать любую подходящую библиотеку.
* Бесплатный хостинг, на котором можно разместить сайт.
  https://www.zzz.com.ua/ru

-----------------------------------------------------------------------------------------------------------------------
: Статистика по коронавирусу                                                                                       [X]:
:---------------------------------------------------------------------------------------------------------------------:
: Данные из файла         : [...Путь к файлу...][Browse]                                                              :
: Данные из github (AJAX) : [   03-19-2020.csv ][V]                                                                   :
:                                                                                                                     :
: ------------------------------------------------------------------------------------------------------------------- :
: : GridPanel                                                                                                       : :
: : Страна: Обновлено           : Летальность текущая : Летальность условная : Подтвержднено : Умерло : Выздоровело : :
: :-----------------------------------------------------------------------------------------------------------------: :
: :China  : 2020-03-19 10:13:14 :               12.34 : 56.78                :         67800 :   3130 :       57682 : :
: :Italy  : 2020-03-19 17:43:03 :               12.34 : 56.78                :         41035 :   3405 :        4440 : :
: :       :                     :                     :                      :               :        :             : :
: 
------------------------------------------------------------------------------------------------------------------- :                                                                                                        :
:                                                                                                       [buttonClose] :
-----------------------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------

================================================================================
-- Отложено на потом
---------

--------------------------------------------------------------------------------
-- Шаг XX.
-- Работа с GIT.
-- Связанная тема - "Работа с SVN".
-- @TODO: подготовить материалы
-- 2020-03-17 Бегло рассказал. Вернемся, если подадобится больше.
---------

--------------------------------------------------------------------------------
-- Шаг XX.
-- Работа с SVN
---------
...

--------------------------------------------------------------------------------
-- Шаг XX
-- Работа с RedMain
---------
...

--------------------------------------------------------------------------------
-- Шаг XX
-- Работа с Docker
---------
...

--------------------------------------------------------------------------------
