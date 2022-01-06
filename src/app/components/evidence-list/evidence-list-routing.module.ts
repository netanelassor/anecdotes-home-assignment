import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceListComponent } from './evidence-list.component';

const routes: Routes = [{ path: '', component: EvidenceListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvidenceListRoutingModule { }
