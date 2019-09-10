import { TestBed } from '@angular/core/testing';

import { EntityComponentService } from './entityComponent.service';

describe('EntitycomponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityComponentService = TestBed.get(EntityComponentService);
    expect(service).toBeTruthy();
  });
});
