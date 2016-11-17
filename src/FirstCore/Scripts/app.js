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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var main_1 = require('ag-grid-ng2/main');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.student = [];
        this.myName = "Karthi1";
        this.getData();
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('api/StudentMasters')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.student = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    // to generate the JSON object as array
    AppComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Your jQuery code goes here
        $('#example').DataTable();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: "app.html",
            directives: [common_1.NgFor],
            providers: [main_1.AgGridModule.withNg2ComponentSupport()]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map