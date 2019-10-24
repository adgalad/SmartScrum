import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestPage } from './manifest.page';

describe('ManifestPage', () => {
  let component: ManifestPage;
  let fixture: ComponentFixture<ManifestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
