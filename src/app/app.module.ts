import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvidenceDataPreviewComponent }
  from './components/evidence-list/evidence-file-item/evidence-data-preview/evidence-data-preview.component';
import { EvidenceFileItemComponent } from './components/evidence-list/evidence-file-item/evidence-file-item.component';
import { EvidenceListRoutingModule } from './components/evidence-list/evidence-list-routing.module';
import { EvidenceListComponent } from './components/evidence-list/evidence-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NoDataComponent } from './components/no-data/no-data.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, EvidenceListComponent,
    EvidenceFileItemComponent,
    EvidenceDataPreviewComponent, NoDataComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    EvidenceListRoutingModule,
    ScrollingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
