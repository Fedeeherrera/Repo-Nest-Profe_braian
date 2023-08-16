import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTracks(): string[] {

      let listadoDeCanciones: string = fs.readFileSync('canciones.txt','utf8');
      let arregloCanciones:string[] = listadoDeCanciones.split(' ');
      return arregloCanciones;
  }

  insertTrack(pTrack,pAnio):void{
    fs.appendFileSync('canciones.txt','\n'+pTrack+' '+pAnio)
  }

  editTrack(nuevoTrack,nuevoAnio):void{
    const datos = nuevoTrack + ' ' + nuevoAnio;
    fs.writeFileSync('canciones.txt',datos);
  }

  deleteTrack():void{
    fs.writeFileSync('canciones.txt','');
  }

}
