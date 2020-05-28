import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'firebaseDate'
})
export class FirebaseDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.toDate();
  }

}
