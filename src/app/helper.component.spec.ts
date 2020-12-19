import { TestBed } from '@angular/core/testing';

import { helperComponent } from './helper.component';

describe('helperComponent', () => {
  let service: helperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(helperComponent);
  });

});
