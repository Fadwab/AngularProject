import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSallesComponent } from './gestion-salles/gestion-salles.component';
import { DeleteSalleComponent } from './delete-salle/delete-salle.component';
import { ConsultSalleComponent } from './consult-salle/consult-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { SharedModule } from "../shared/shared.module";
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        GestionSallesComponent,
        DeleteSalleComponent,
        ConsultSalleComponent,
        EditSalleComponent,
    ],
    entryComponents: [
        DeleteSalleComponent,
        ConsultSalleComponent,
        EditSalleComponent,
    ],
})
export class SalleModule { }
