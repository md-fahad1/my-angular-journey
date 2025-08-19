import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './structural-directives/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    {
        path: 'data-binding',
        component: DataBindingComponent,
    },
    {
        path: 'structural-directive',
        component: StructuralDirectiveComponent

    },
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
    }
];
