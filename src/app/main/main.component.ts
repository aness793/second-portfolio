import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
projects=[
  {
    url:'https://aness793.github.io/Myportfolio/index.html',
    img:'myportfolio.jpg',
    title:'my first portfolio'
  },{
    url:'https://aness793.github.io/BMI/',
    img:'bmi.jpg',
    title:'BMI Calculator'
  }
]
}
