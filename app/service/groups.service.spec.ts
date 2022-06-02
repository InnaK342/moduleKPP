import { TestBed } from '@angular/core/testing';

import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let service: GroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('Загальна кількість студентів на кожному курсі', () =>
  {
    let x = [[1,2,3],[3,4,5],[1,2],[4],[4,5,3]];
    let right = [6,12,3,4,12];
    let res = service.result(x);
    expect(res).toEqual(right);
  });
  fit('Сума студентів на певному курсі', () =>
  {
    let x = [1,2,4];
    let right = 7;
    let res = service.sum(x);
    expect(res).toEqual(right);
  });
});
