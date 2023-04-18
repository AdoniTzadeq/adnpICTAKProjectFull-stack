import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementdashboardComponent } from './placementdashboard.component';

describe('PlacementdashboardComponent', () => {
  let component: PlacementdashboardComponent;
  let fixture: ComponentFixture<PlacementdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
