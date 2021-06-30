import { TestBed } from "@angular/core/testing";
import { SetColorDirective } from "./set-color.directive";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  selector: 'wrapper-component'
})

class WrapperComponent { }

describe('set color directive', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        SetColorDirective
      ]
    });
  });

  it('should set wrapper bg color', () => {
    const bgColor = 'blue';

    TestBed.overrideComponent(WrapperComponent, {
      set: {
        template: `<div [appSetColor]="'${bgColor}'"></div>`
      }
    });

    const fixtureWrapperComponent = TestBed.createComponent(WrapperComponent);
    const element = fixtureWrapperComponent.debugElement;
    fixtureWrapperComponent.detectChanges();

    const setColorDirectiveHost = element.query(By.directive(SetColorDirective));
    expect(setColorDirectiveHost.styles['background-color']).toBe(bgColor);
  });

});
