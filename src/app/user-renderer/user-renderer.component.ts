import { User } from '../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-renderer',
    templateUrl: './user-renderer.component.html',
    styleUrls: ['./user-renderer.component.css']
})
export class UserRendererComponent implements OnInit {

    @Input() user: User;

    constructor() { }

    ngOnInit() {
    }

}
