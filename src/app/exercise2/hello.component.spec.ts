import { async, ComponentFixture } from '@angular/core/testing';
import {ConfigureFn, configureTests} from "../../test-config.helper";
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [ HelloComponent ]
        });
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(HelloComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshots', () => {
    expect(fixture.debugElement.nativeElement).toMatchSnapshot();
  })

  it('should display expected name', () => {
    let expectedName = "Val";
    component.name = expectedName;
    fixture.detectChanges();
    
	
	expect(fixture.debugElement.nativeElement.textContent).toContain(expectedName);
  })
});