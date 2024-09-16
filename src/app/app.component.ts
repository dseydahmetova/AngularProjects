import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  intervalSub;

  title = 'my-first-angular-app';
  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello From onInit')
    }, 1000);
  }
  ngOnDestroy(): void {
    if(this.intervalSub)
      clearInterval(this. intervalSub);
  }
}
