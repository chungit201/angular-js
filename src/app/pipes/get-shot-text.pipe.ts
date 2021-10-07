import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getShotText',
})
export class GetShotTextPipe implements PipeTransform {
  transform(text: any, ...args: unknown[]): string {
    return `${text.substr(0, 20)}...`;
  }
}
