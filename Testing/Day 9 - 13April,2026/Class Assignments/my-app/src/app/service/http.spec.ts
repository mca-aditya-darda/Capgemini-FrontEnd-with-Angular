import { TestBed } from '@angular/core/testing';

import { Http, ProductType } from './http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Http', () => {
  let service: Http;
  let testHttp: HttpTestingController;

  const expectedProducts: ProductType[] = [
    {
      id: 1,
      title: 'prod 1',
      image: 'some address',
      price: 100,
    },
    {
      id: 2,
      title: 'prod 1',
      image: 'some address',
      price: 200,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Http);
    testHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    testHttp.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products from api', () => {
    service.getdata().subscribe({
      next: (data) => {
        expect(data).toEqual(expectedProducts);
        expect(data.length).toBe(2);
      },
    });
    const req = testHttp.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');

    req.flush(expectedProducts);
  });
});
