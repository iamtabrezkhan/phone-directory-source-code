import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public name;
  public phone;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }

  getAllSubscribers() {
    return JSON.parse(localStorage.getItem('subscribers'));
  }

  addEntry() {
    var subscribers = this.getAllSubscribers();
    if(subscribers) {
      subscribers.push({
        name: this.name,
        phone: this.phone
      });
      localStorage.setItem('subscribers', JSON.stringify(subscribers));
    } else {
      var subscriber = {
        name: this.name,
        phone: this.phone
      }
      localStorage.setItem('subscribers', JSON.stringify([subscriber]));
    }
    this.router.navigate(['']);
  }

}
