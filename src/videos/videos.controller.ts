import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe, HttpCode, HttpException, HttpStatus, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PipesPipe } from './pipes/pipes.pipe';
import { LoggerInterceptor } from 'src/utils/logger/logger.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.handle';




@Controller('videos')
@UseInterceptors(LoggerInterceptor)
@UsePipes(new ValidationPipe())
export class VideosController {
  constructor(private readonly videosService: VideosService) {}



  @Post()
  @HttpCode(201)
  create(@Body() body_from_videos: CreateVideoDto) {

    console.log("body de la peticion de /videos",body_from_videos)

    if(body_from_videos.src.includes("youtube")){
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'El link no puede ser de youtube',
      }, HttpStatus.FORBIDDEN, {
        cause: "favoritismo"
      });
    }

    
    return this.videosService.create(body_from_videos);

  }

  // queries
  @Get()
  findAll(@Query() nombre_del_query:any) {

    console.log("queries del /videos",nombre_del_query)

    return this.videosService.findAll();
  }

  

  //PARAMS
  @Get(':id')
  findOne(@Param('id', PipesPipe) id: PipesPipe) {
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }


  @Post("upload")
  @UseInterceptors(FileInterceptor("nombrePersonalizadoAvatar", {storage: storage}))
  handleUpload(@UploadedFile() file: Express.Multer.File ){

    console.log("estoy pasando por upload")
    console.log(file)


    return "asd"

  }

  //las entidades son como tablas
 

}
