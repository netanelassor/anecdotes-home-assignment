import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EvidenceService } from './evidence.service';
import { EvidenceFileViewModel } from './models/evidence.model';

@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.scss']
})
export class EvidenceListComponent implements OnInit {
  evidenceFileList$: Observable<EvidenceFileViewModel[]> | undefined;
  constructor(private evidenceService: EvidenceService) { }

  ngOnInit(): void {
    this.getEvidenceList();
  }

  getEvidenceList(): void {
    this.evidenceFileList$ = this.evidenceService.getEvidenceList();
  }
  onFileUpload(event: any): void {
    const selectedFile: File = event.target.files[0];
    this.evidenceService.addNewEvidenceFile(selectedFile);
  }

}
