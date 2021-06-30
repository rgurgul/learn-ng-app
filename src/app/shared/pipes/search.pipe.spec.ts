import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], filters: { [s: string]: string; } | undefined): any[] {
    if (arr && filters) {
      return arr.filter((item) => {
        for (const key in filters) {
          const filterValue = filters[key].toString().toLowerCase();
          const itemValue = item[key].toString().toLowerCase();
          const notexists = !itemValue.includes(filterValue);
          if (notexists) return false;
        }
        return true;

      })
    }
    return arr;
  }

}
