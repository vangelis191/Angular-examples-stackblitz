import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AsyncDataComponent } from './async-data/async-data.component';
import { Child1Component } from './child-route/Child1Component';
import { Child2Component } from './child-route/Child2Component';
import { ParentComponent } from './child-route/parent.component';
import { BackgroundColorComponent } from './custom-directive-example/background-change.component';

import { HomeComponent } from './Home/home.component';
import { ContainerTemplateComponent } from './ng-container-template/ng-contaier-template.component';
import { UppercasePipe } from './pipes/uppercase-pipe';
import { TwoWayBindingComponent } from './twoWayBinding/twoWayBinding.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },

  {path: 'landing-page',
  component: HomeComponent},

   {path: 'async-data',
    component: AsyncDataComponent},
    {path: 'two-way-binding',
    component: TwoWayBindingComponent},

    {path: 'container-template',
    component: ContainerTemplateComponent},
    {path: 'custom-directive',
    component: BackgroundColorComponent},
    {path: 'custom-pipe',
    component: UppercasePipe},

    
    {
      path: 'parent',
      component: ParentComponent, 
      children: [ 
        { path: 'child1', component: Child1Component },
        { path: 'child2', component: Child2Component },
    
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
