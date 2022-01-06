import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvidenceFileViewModel } from '../models/evidence.model';
import { EvidenceDataPreviewComponent } from './evidence-data-preview/evidence-data-preview.component';

@Component({
  selector: 'app-evidence-file-item',
  templateUrl: './evidence-file-item.component.html',
  styleUrls: ['./evidence-file-item.component.scss']
})
export class EvidenceFileItemComponent implements OnInit {
  @Input() evidenceFile: EvidenceFileViewModel | undefined;

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit(): void {
  }

  async openPreview(evidenceFile: EvidenceFileViewModel) {
    const params = {
      evidenceDataList: evidenceFile.evidenceData
    };
    const modal = await this.modalCtrl.create(
      {
        component: EvidenceDataPreviewComponent,
        cssClass: '',
        componentProps: params,
      });

    await modal.present();
  }

}
