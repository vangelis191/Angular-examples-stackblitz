import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AsyncDataComponent } from './async-data/async-data.component';
import { DummyDataService } from './dummy-data.service';
import { TwoWayBindingComponent } from './twoWayBinding/twoWayBinding.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './child-route/parent.component';
import { Child1Component } from './child-route/Child1Component';
import { Child2Component } from './child-route/Child2Component';
import { Child3Component } from './child-route/Child3.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackgroundColorDirective } from './directives/background.directive';
import { BackgroundColorComponent } from './custom-directive-example/background-change.component';
import { UppercasePipe } from './pipes/uppercase-pipe';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe.component';
import { ContainerTemplateComponent } from './ng-container-template/ng-contaier-template.component';
@NgModule({
  declarations: [
    AppComponent,
    AsyncDataComponent,
    TwoWayBindingComponent,
    HomeComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    BackgroundColorComponent,
    CustomPipeExampleComponent,
    BackgroundColorDirective,
    UppercasePipe,
    ContainerTemplateComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
  
    HttpClientModule,
    FormsModule,
  ],
  providers: [DummyDataService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
