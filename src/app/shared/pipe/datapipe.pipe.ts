import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datapipe'
})
export class DatapipePipe implements PipeTransform {

  transform(value: any, ): any {
    return Object.values(value)
  }

}
