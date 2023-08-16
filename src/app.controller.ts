import { Controller, Get, Post,Body,Put,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('LF')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/canciones')
  getTracks():string[]{
    return this.appService.getTracks();
  }

  @Post()
  insertTrack(@Body('cancion') nombre:string,
  @Body('anio') anioLanzamiento:string){
    this.appService.insertTrack(nombre,anioLanzamiento);
  }
  @Put()
  editTrack(@Body('cancion') nombreNuevaCancion:string,
  @Body('nuevoAnio') nuevoAnio:string){
 
    this.appService.editTrack(nombreNuevaCancion,nuevoAnio);
  }

  @Delete()
  deleteTrack():void{
    this.appService.deleteTrack();
  }

}
