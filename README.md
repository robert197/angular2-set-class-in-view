# angular2-set-class-in-view
angular2-set-class-in-view is a plugin directive for [Angular 2](http://angular.io).

#### Setup
----------

To use the Angular set class in view, simply run `npm install angular2-set-class-in-view` and then include SetClassInView in your project (see Example for more details).

#### Config / Example
-----------

Angular2 set class in view sets is able to set class on every element which appears in viewport of mobile or desktop browser. 

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { SetClassInView } from 'angular2-set-class-in-view/main';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      SetClassInView
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

```html
<div [setClassInView]="'show'">
    <h3>This element is in view</h3>
    <img src="images/image.jpg" alt="image">
</div>
```

#### Config / Example
-----------

When you are using SystemJs you need to load angular2-set-class-in-view dependency

```javascript
'angular2-set-class-in-view': {
        main: './main.js',
        defaultExtension: 'js'
      }
```
and map 'angular2-set-class-in-view to 'node_modules/angular2-set-class-in-view'.

Your systemjs.config.js could look like: 

```javascript
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'angular2-set-class-in-view': 'npm:angular2-set-class-in-view'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-set-class-in-view': {
        main: './main.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
```
