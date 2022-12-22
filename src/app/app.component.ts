import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'claculator';
  symbolArr: number[] = [42, 43, 45, 47];
  clear: string = '';

  constructor() { }

  val(data: any) {
    let display: string = data.target.value;
    // console.log(display)
    (document.getElementById('ans') as HTMLInputElement).value += display;
  }

  answer(): void {
    let getData: string = (document.getElementById('ans') as HTMLInputElement)
      .value;
    let printaData = eval(getData);
    printaData = parseFloat(printaData.toFixed(2));
    (document.getElementById('ans') as HTMLInputElement).value = printaData;
  }

  onedelete(data: any) {
    let getData: string = (document.getElementById('ans') as HTMLInputElement)
      .value;
    // console.log(getData);
    let deleteOne = getData.substring(0, getData.length - 1);
    // console.log(deleteOne)
    (document.getElementById('ans') as HTMLInputElement).value = deleteOne;
  }

  clearAll(data: any) {
    (document.getElementById('ans') as HTMLInputElement).value = this.clear;
  }

  check(data: any): void {
    // console.log(data.target.value);
    let getVal: string = data.target.value;
    console.log(getVal);
    // console.log(eval(getVal));

    if (data.keyCode == 13) {
      let ans = eval(getVal);
      ans = parseFloat(ans.toFixed(2));
      (document.getElementById('ans') as HTMLInputElement).value = ans;
    }
  }

  notChar(data: any): void {
    if (data.keyCode >= 65 && data.keyCode <= 96) {
      data.prevantDefault();
    } else if (data.keyCode >= 97 && data.keyCode <= 122) {
      data.prevantDefault();
    } else if (data.keyCode) {
      let getVal: string = data.target.value;
      // console.log(getVal);
      let findVal = getVal.slice(-1);
      // console.log(findVal);
      if (findVal === '+') {
        if (data.keyCode === 43) {
          data.prevantDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('ans') as HTMLInputElement).value =
            getVal.slice(0, getVal.length - 1);
        }
      } else if (findVal === '-') {
        if (data.keyCode === 45) {
          data.prevantDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('ans') as HTMLInputElement).value =
            getVal.slice(0, getVal.length - 1);
        }
      } else if (findVal === '*') {
        if (data.keyCode === 42) {
          data.prevantDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('ans') as HTMLInputElement).value =
            getVal.slice(0, getVal.length - 1);
        }
      } else if (findVal === '/') {
        if (data.keyCode === 47) {
          data.prevantDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('ans') as HTMLInputElement).value =
            getVal.slice(0, getVal.length - 1);
        }
      }
    }
  }
}
