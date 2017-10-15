# clarity-wrapper-grid

Demo at: 
https://snagar78.github.io/clarity-wrapper-grid/


```
<my-grid [columns]="columns" [rows]="rows"></my-grid>
```

```
<ng-template #nameRenderer let-user="rowData">
    <user-renderer [user]="user"></user-renderer>
</ng-template>

<ng-template #nameHeaderRenderer>
    <clr-icon shape="user" class="is-solid"></clr-icon>
    Custom Title for Name Column
</ng-template>
```

