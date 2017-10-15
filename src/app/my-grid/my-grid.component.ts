import { Component, OnInit, TemplateRef, Input } from '@angular/core';


export class ColDef<T>{
    title: string;
    dataField: string;
    templateRef?: TemplateRef<T>;
    headerTemplate?: TemplateRef<T>;
}

@Component({
    selector: 'my-grid',
    templateUrl: './my-grid.component.html',
    styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent<T> implements OnInit {

    @Input() columns: ColDef<T>[];
    @Input() rows: T[];


    constructor() { }

    ngOnInit() {
    }

}
