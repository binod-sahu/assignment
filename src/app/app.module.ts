import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerServerComponent } from './components/customer-server/customer-server.component';
import { CustomerSideNavComponent } from './components/customer-side-nav/customer-side-nav.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomerRightSideTableComponent } from './components/customer-table/customer-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerServerEmptyComponent } from './components/customer-server-empty/customer-server-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerServerComponent,
    CustomerSideNavComponent,
    CustomerRightSideTableComponent,
    CustomerServerEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, MatSliderModule, BrowserAnimationsModule, MatCheckboxModule, MatRadioModule, 
    MatExpansionModule, RangeSliderModule, HttpClientModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatButtonModule,
    MatToolbarModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }