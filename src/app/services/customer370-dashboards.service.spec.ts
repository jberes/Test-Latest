import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Customer370DashboardsService } from './customer370-dashboards.service';

describe('Customer370DashboardsService', () => {
  let service: Customer370DashboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Customer370DashboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
