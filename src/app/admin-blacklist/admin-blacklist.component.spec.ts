import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlacklistComponent } from './admin-blacklist.component';

describe('AdminBlacklistComponent', () => {
  let component: AdminBlacklistComponent;
  let fixture: ComponentFixture<AdminBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlacklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
