import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePopularComponent } from './course-popular.component';

describe('CoursePopularComponent', () => {
  let component: CoursePopularComponent;
  let fixture: ComponentFixture<CoursePopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursePopularComponent]
    });
    fixture = TestBed.createComponent(CoursePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
