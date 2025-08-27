import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './structural-directives/attribute-directive/attribute-directive.component';
import { ControlFlowStatementComponent } from './control-flow-statement/control-flow-statement.component';
import { TamplateFormComponent } from './tamplate-form/tamplate-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { GetapiComponent } from './getapi/getapi.component';
import { PostapiComponent } from './postapi/postapi.component';
import { NgTamplatecomponentComponent } from './ng-tamplatecomponent/ng-tamplatecomponent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './service/auth.guard';
import { ClassInterfaceComponent } from './class-interface/class-interface.component';
import { SignalComponent } from './signal/signal.component';


export const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignupComponent },
          { path: 'home', component: DataBindingComponent },
          { path: 'data-binding', component: DataBindingComponent,
            canActivate:[authGuard]
           },
          { path: 'structural-directive', component: StructuralDirectiveComponent },
          { path: 'attribute-directive', component: AttributeDirectiveComponent },
          { path: 'control-flow', component: ControlFlowStatementComponent },
          { path: 'forms/tamplate-form', component: TamplateFormComponent },
          { path: 'forms/reactive-form', component: ReactiveFormComponent },
          { path: 'getapi', component: GetapiComponent },
          { path: 'postapi', component: PostapiComponent },
          { path: 'ngtamplate', component: NgTamplatecomponentComponent },
          { path: 'viewchild', component: ViewchildComponent },
           { path: 'class-interface', component: ClassInterfaceComponent },
           { path: 'signal', component: SignalComponent },

          { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
      }

    ]
  },
  { path: '**', redirectTo: '' }
];