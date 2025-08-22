import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './structural-directives/attribute-directive/attribute-directive.component';
import { ControlFlowStatementComponent } from './control-flow-statement/control-flow-statement.component';
import { TamplateFormComponent } from './tamplate-form/tamplate-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { GetapiComponent } from './getapi/getapi.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'home', component: DataBindingComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'structural-directive', component: StructuralDirectiveComponent },
      { path: 'attribute-directive', component: AttributeDirectiveComponent },
      { path: 'control-flow', component: ControlFlowStatementComponent },
      { path: 'forms/tamplate-form', component: TamplateFormComponent },
      { path: 'forms/reactive-form', component: ReactiveFormComponent },
        { path: 'getapi', component: GetapiComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];