import { Test, TestingModule } from '@nestjs/testing';
import { NuevomoduloController } from './nuevomodulo.controller';
import { NuevomoduloService } from './nuevomodulo.service';

describe('NuevomoduloController', () => {
  let controller: NuevomoduloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuevomoduloController],
      providers: [NuevomoduloService],
    }).compile();

    controller = module.get<NuevomoduloController>(NuevomoduloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
