import { User } from './user';
import { ColDef } from './my-grid/my-grid.component';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'app';

    @ViewChild('nameRenderer', { read: TemplateRef })
    nameRenderer: TemplateRef<User>;

    @ViewChild('nameHeaderRenderer', { read: TemplateRef })
    nameHeaderRenderer: TemplateRef<User>;

    columns: ColDef<User>[] = [];
    rows: User[] = [];


    ngAfterViewInit() {
        // customr renderer
        this.columns.push({
            title: 'Name',
            dataField: 'name',
            templateRef: this.nameRenderer,
            headerTemplate: this.nameHeaderRenderer
        });

        // default renderer
        this.columns.push({
            title: 'Age',
            dataField: 'age'
        });

        // data
        for (let i = 0; i < 10; i++) {
            this.rows.push({
                name: `User ${i + 1}`,
                age: Math.ceil(Math.random() * 100)
            });
        }

    }

}
