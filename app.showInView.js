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
var core_1 = require('@angular/core');
var SetClassInView = (function () {
    function SetClassInView(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    SetClassInView.prototype.setClassWhenInView = function () {
        this.renderer.setElementClass(this.el.nativeElement, this.className, SetClassInView.isInView(this.el));
    };
    SetClassInView.isInView = function (el) {
        var viewport = {
            top: window.scrollY,
            left: scrollX
        };
        var rect = el.nativeElement.getBoundingClientRect();
        var bounds = {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
        bounds['right'] = bounds.left + el.nativeElement.outerWidth;
        bounds['bottom'] = bounds.top + el.nativeElement.outerHeight;
        viewport['right'] = viewport.left + window.innerWidth;
        viewport['bottom'] = viewport.top + window.innerHeight;
        return (!(viewport['right'] < bounds.left
            || viewport.left > viewport['right']
            || viewport['bottom'] < bounds.top
            || viewport.top > viewport['bottom']));
    };
    __decorate([
        core_1.Input('setClassInView'), 
        __metadata('design:type', String)
    ], SetClassInView.prototype, "className", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SetClassInView.prototype, "setClassWhenInView", null);
    SetClassInView = __decorate([
        core_1.Directive({
            selector: '[setClassInView]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], SetClassInView);
    return SetClassInView;
}());
exports.SetClassInView = SetClassInView;
//# sourceMappingURL=app.showInView.js.map