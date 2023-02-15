import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: string[], args: string=''): string[] {
    if(value){
      return value.filter(name => name.toLowerCase().startsWith(args.toLowerCase()));
    }
    else{
      return [];
    }
  }

}
