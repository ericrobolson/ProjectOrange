import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBuilderComponent } from './graph-builder.component';

describe('GraphBuilderComponent', () => {
  let component: GraphBuilderComponent;
  let fixture: ComponentFixture<GraphBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
