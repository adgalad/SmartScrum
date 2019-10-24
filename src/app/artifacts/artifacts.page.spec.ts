import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsPage } from './artifacts.page';

describe('ArtifactsPage', () => {
  let component: ArtifactsPage;
  let fixture: ComponentFixture<ArtifactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
