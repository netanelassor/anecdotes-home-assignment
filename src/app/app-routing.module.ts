import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EvidenceListComponent } from './components/evidence-list/evidence-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'evidence-list', pathMatch: 'full' },
  { path: 'evidence-list', component: EvidenceListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
