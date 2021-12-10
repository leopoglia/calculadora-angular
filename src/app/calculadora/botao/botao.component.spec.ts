import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';


import { BOTAOComponent } from './botao.component';

describe('BOTAOComponent', () => {
  let component: BOTAOComponent;
  let fixture: ComponentFixture<BOTAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOTAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOTAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
