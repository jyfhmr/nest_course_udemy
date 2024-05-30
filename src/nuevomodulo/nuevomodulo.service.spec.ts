import { Test, TestingModule } from '@nestjs/testing';
import { NuevomoduloService } from './nuevomodulo.service';

describe('NuevomoduloService', () => {
  let service: NuevomoduloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NuevomoduloService],
    }).compile();

    service = module.get<NuevomoduloService>(NuevomoduloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
