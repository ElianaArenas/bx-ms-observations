import { mock } from 'jest-mock-extended';
import { IObservationDomainService } from '../../../../domain/observation/observation.service';
import { ObservationController } from '../../../../api/controllers/observation.controller';
import { observationsStub } from '../../../stubs';

describe('ObservationController', () => {
  let controller: ObservationController;
  const domainServiceMock = mock<IObservationDomainService>();

  beforeEach(async () => {
    controller = new ObservationController(domainServiceMock);
  });

  describe('POST', () => {
    it('should create an observation and return it', async () => {
      domainServiceMock.create.mockResolvedValue(observationsStub());

      const result = await controller.create(observationsStub());

      expect(result).toEqual(observationsStub());
    });
  });

  describe('GET', () => {
    it('should get an Array of observations', async () => {
      domainServiceMock.getByEventException.mockResolvedValue([
        observationsStub(),
      ]);

      const result = await controller.getObservations(['ACV']);

      expect(result).toEqual([observationsStub()]);
    });
  });
});
