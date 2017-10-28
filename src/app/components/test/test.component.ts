import { Component, OnInit } from '@angular/core';
import { GetTestService } from '../../services/getTest.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

    private cards: card[];
    private response: String
    constructor(private getTestService: GetTestService) { }

    ngOnInit() {
        this.getTestService.getTestPhotoList().subscribe((response) => {

            this.cards = response.cards
        })
    }
}

interface card {

    name: string;
    imageUrl: string;
}