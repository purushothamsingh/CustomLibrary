/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopCommentComponent } from './topComment.component';

describe('TopCommentComponent', () => {
  let component: TopCommentComponent;
  let fixture: ComponentFixture<TopCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
