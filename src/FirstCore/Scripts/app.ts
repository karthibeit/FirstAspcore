

import { Component, Injectable, AfterViewInit } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Http, Headers, Response } from 'angular2/http';
import { StudentMasters } from './model';
import { AgGridModule } from 'ag-grid-ng2/main';

import 'rxjs/Rx';
declare var $: any
declare var module: any;
@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.html",
    directives: [NgFor],
    providers: [AgGridModule.withNg2ComponentSupport()]
    
})
export class AppComponent implements AfterViewInit{
    
    student: Array<StudentMasters> = [];
    myName: string;
    constructor(public http: Http) {
        
        this.myName = "Karthi1";
        this.getData();
    }

    getData() {

        this.http.get('api/StudentMasters')
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.student = data },
            err => console.error(err),
            () => console.log('done')

            );
    }
    // to generate the JSON object as array
    generateArray(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }
    ngAfterViewInit() {
        // Your jQuery code goes here
        $('#example').DataTable();
    }
}

