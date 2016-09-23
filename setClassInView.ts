import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';
@Directive({
    selector: '[setClassInView]'
})

export class SetClassInView {

    @Input('setClassInView') className:string;
    private el:ElementRef;
    private renderer:Renderer;

    constructor(el: ElementRef, renderer: Renderer) {
        this.el = el;
        this.renderer = renderer;
    }

    @HostListener('window:scroll', ['$event'])
    private setClassWhenInView():void {
        this.renderer.setElementClass(this.el.nativeElement, this.className, SetClassInView.isInView(this.el));
    }

    private static isInView(el): boolean {
        let viewport = {
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

        return(
            !(viewport['right'] < bounds.left
            || viewport.left > viewport['right']
            || viewport['bottom'] < bounds.top
            || viewport.top > viewport['bottom'])
        );
    }

}
