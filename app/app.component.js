"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Importamos de la librería @angular/core los módulos
 * Component: Usado para definir el componente
 * OnInit: usado para implementar la interfaz OnInit y
 * con ella el método ngOnInit()
 *
 * Importamos de la librería rxjs/Rx el modulo:
 * Observable: usado para instanciar y suscribirnos a un
 * Observable Timer
*/
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
/**
 * Definimos el componente haciendo uso del decorator @Component
 * y los siguientes parámetros:
 * selector = define el nombre del selector CSS usado por un elemento
 *            HTML que representa al componente
 * template = define la plantilla HTML que renderiza el contenido en pantalla
 * templateUrl = ruta al fichero .html donde se define el template, esta
 * propiedad reemplaza a la propiedad template
*/
var AppComponent = (function () {
    function AppComponent() {
        //Titulo del Componente
        this.title = 'Mi Shopping List';
        //Mini BD de productos con sus cantidades
        this.itemsDB = [
            { productName: 'Manzanas', cantidad: 5 },
            { productName: 'Pera', cantidad: 2 },
            { productName: 'Banana', cantidad: 1 },
            { productName: 'Kiwi', cantidad: 3 },
            { productName: 'Melocoton', cantidad: 10 },
            { productName: 'Patatas', cantidad: 10 },
            { productName: 'Jamón', cantidad: 2 },
            { productName: 'Queso', cantidad: 2 },
            { productName: 'Tomates', cantidad: 5 },
            { productName: 'Pimientos', cantidad: 1 }
        ];
        //Array de Items que se han de mostrar en pantalla 
        this.items = [];
        this._myInterval = null;
        //Este método cosntructor permite instanciar al Componente
    }
    AppComponent.prototype.ngOnInit = function () {
        //ngOnInit es un método que se ejecuta cuando el componente 
        //esta completamente instanciado
        var _this = this;
        /**
         * Instanciamos un Observable.timer cuya ejecución tenga
         * un retraso de 1 segundo (1000 milisegundos)
         * y se re-ejecute cada 3 segundos (3000 milisegundos)
         * y en cada ejecución llamará al método _pickRandomItems
         * */
        var timer = Rx_1.Observable.timer(1000, 3000);
        timer.subscribe(function (t) {
            _this._pickRandomItems();
        });
    };
    AppComponent.prototype._pickRandomItems = function () {
        //Método que determina de forma aleatoria los items 
        //que se han de mostrar en pantalla y llena la propiedad items
        this.items = [];
        var itemsCount = Math.floor((Math.random() * 10) + 1);
        for (var index = 0; index < itemsCount; index++) {
            var item = this.itemsDB[Math.floor((Math.random() * 9) + 0)];
            this.items.push(item);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-app',
            templateUrl: 'app/app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map