import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'downseguro'
})
export class DownseguroPipe implements PipeTransform {

  constructor( private domSanatizer: DomSanitizer) {

  }

  transform( value: string, url: string): any {
    return this.domSanatizer.bypassSecurityTrustUrl( url + value );
  }

}
