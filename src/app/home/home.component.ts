import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    Animations.fadeWithPushDown
  ]
})
export class HomeComponent implements OnInit {

  public allSubscribers;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.allSubscribers = this.getAllSubscribers();
  }

  goToAdd() {
    this.router.navigate(['add']);
  }

  getAllSubscribers() {
    return JSON.parse(localStorage.getItem('subscribers'));
  }

  delete(i) {
    var subscribers = this.getAllSubscribers();
    subscribers.splice(i, 1);
    this.allSubscribers.splice(i, 1);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
  }

}
