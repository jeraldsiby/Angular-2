import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                <h1> Hello {{pageHeader}} </h1>
                <my-employee></my-employee>
                </div> `
})

export class AppComponent {
    pageHeader: string = "Employee Details";
} 