import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  seen=false
  isSmallScreen =false
  @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.isSmallScreen = window.innerWidth < 570;
    }
    appear(){
  this.seen = !this.seen 
  
}
constructor(private elementRef: ElementRef) {}

// @Output() clickOutside = new EventEmitter();

// @HostListener('document:click', ['$event.target'])
// public onClick(targetElement: any): void {
//     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
//     if (!clickedInside) {
//         this.clickOutside.emit();
//     }
// }
}
