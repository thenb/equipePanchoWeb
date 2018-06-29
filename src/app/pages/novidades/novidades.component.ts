import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-novidades',
    templateUrl: 'novidades.component.html'
})

export class NovidadesComponent {
    constructor(      
        private router: Router
    ) { }
    
}
