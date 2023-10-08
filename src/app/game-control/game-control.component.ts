import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  count=0
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.count++)
    },1000)
  }
  pauseGame(){
    clearInterval(this.interval)
  }
}
