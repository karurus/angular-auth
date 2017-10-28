import { Component, OnInit } from '@angular/core';
import { GetPhotoService } from '../../services/getPhoto.service';
import { GetTestService } from '../../services/getTest.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  private photoList: Photo[];
  private isEditable: boolean = true;
  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];

  constructor(private getphotoService: GetPhotoService) { }

  ngOnInit() {
    this.my_name = "Donald Trump"
    this.age = 56;
    this.email = "Trump_lnwZa@gmail.com";
    this.address = {
      street: "99 Dindeang-Road Dindeang",
      city: "Dindeang",
      province: "Bangkok",
      postcode: "10400"
    }
    this.skills = ["Gaming", "Eating"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4, 4995);
    })

  }
  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }
  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }
  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

}
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
