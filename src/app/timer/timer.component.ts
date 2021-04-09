import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{

  //declare a variable
  seconds_number = 0
  minutes = 0

  timer(){

    return 'Timer ' +  (this.seconds_number/3600).toFixed(0)  +
              ' : ' +  (this.seconds_number/60).toFixed(0)    + 
              ' : ' +   this.seconds_number%60


  }

  constructor() { 

    setInterval(()=>{
      this.seconds_number += 1
    }, 1000)

  }

}
