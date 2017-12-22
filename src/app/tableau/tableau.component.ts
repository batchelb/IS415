import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.less']
})
export class TableauComponent implements OnInit {
  @ViewChild('button') button:ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    setTimeout(()=>{this.button.nativeElement.click()},500);
  }

}
