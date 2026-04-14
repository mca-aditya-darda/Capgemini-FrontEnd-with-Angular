import { CounterComponent } from './../counter/counter';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter as CounterService } from '../service/counter';

describe('Counter Component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let counterService: CounterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [CounterService],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    counterService = TestBed.inject(CounterService);

    await fixture.whenStable();
  });

  afterEach(() => {
    counterService.resetcount();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the count when clicked', () => {
    expect(counterService.count).toBe(0);
    component.increment();
    expect(counterService.count).toBe(1);
  });

  it('should decrease the count when clicked', () => {
    component.increment();
    component.increment();
    expect(counterService.count).toBe(2);

    component.decrement();
    expect(counterService.count).toBe(1);
  });

  it('should reset the count when clicked', () => {
    component.increment();
    component.increment();
    component.increment();

    expect(counterService.count).toBe(3);

    component.reset();
    expect(counterService.count).toBe(0);
  });
});
