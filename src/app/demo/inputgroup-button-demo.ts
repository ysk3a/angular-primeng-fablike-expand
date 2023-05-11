import { Component } from '@angular/core';

@Component({
  selector: 'inputgroup-button-demo',
  templateUrl: './inputgroup-button-demo.html',
  styleUrls: ['./inputgroup-button-demo.scss'],
})
export class InputgroupButtonDemo {
  collapsedFab: boolean = false;
  btnClickCounter = 0;
  fabToggle(): void {
    this.collapsedFab = !this.collapsedFab;
    this.btnClickCounter += 1;
    console.log(`clicked button ${this.btnClickCounter}`);
  }
}
