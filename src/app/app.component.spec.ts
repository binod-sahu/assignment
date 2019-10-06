import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CustomerServerComponent } from './components/customer-server/customer-server.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerServerEmptyComponent } from './components/customer-server-empty/customer-server-empty.component';
import { CustomerRightSideTableComponent } from './components/customer-table/customer-table.component';
import { CustomerSideNavComponent } from './components/customer-side-nav/customer-side-nav.component';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, BrowserAnimationsModule,
        MatTableModule, HttpClientTestingModule,
        MatSortModule, 
        MatPaginatorModule, MatCheckboxModule, MatSelectModule,
        FormsModule, ReactiveFormsModule, RangeSliderModule
      ],
      declarations: [
        AppComponent, CustomerServerComponent, HeaderComponent, FooterComponent, CustomerServerEmptyComponent,
         CustomerRightSideTableComponent, CustomerSideNavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'leaseweb'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('leaseweb');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span')).toEqual(null);
  });
});
