import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For mocking HTTP requests
import { ProductService } from './product.service'; // Your actual service

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule if ProductService makes HTTP calls
      providers: [ProductService]         // Provide the service explicitly if not using providedIn: 'root'
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
