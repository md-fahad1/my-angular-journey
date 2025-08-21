import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './structural-directives/attribute-directive/attribute-directive.component';
import { ControlFlowStatementComponent } from './control-flow-statement/control-flow-statement.component';
import { TamplateFormComponent } from './tamplate-form/tamplate-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'structural-directive', component: StructuralDirectiveComponent },
  { path: 'attribute-directive', component: AttributeDirectiveComponent },
  {path: 'control-flow', component:ControlFlowStatementComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path: 'tamplate-form', component:TamplateFormComponent},
  { path: '**', redirectTo: 'data-binding' }
];
