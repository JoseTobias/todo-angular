import { TestBed } from '@angular/core/testing';

import { TodoSreviceService } from './todo-srevice.service';

describe('TodoSreviceService', () => {
  let service: TodoSreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
