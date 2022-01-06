import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EvidenceViewModel } from '../../models/evidence.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-evidence-data-preview',
  templateUrl: './evidence-data-preview.component.html',
  styleUrls: ['./evidence-data-preview.component.scss'],
})
export class EvidenceDataPreviewComponent implements OnInit {
  @Input() evidenceDataList: EvidenceViewModel[] | undefined;

  filteredEvidence: EvidenceViewModel[];
  searchInput = new FormControl('');
  searchForm: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.filteredEvidence = [...this.evidenceDataList];
    this.initSearchForm();
  }

  initSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      searchInput: [''],
    });
    this.searchForm.controls.searchInput.valueChanges
      .pipe(debounceTime(300))
      .subscribe((searchInput: string) => {
        this.search(searchInput);
      });
  }

  search(searchText: string): void {
    if (!searchText || searchText === '') {
      this.filteredEvidence = [...this.evidenceDataList];
    }
    else {
      this.filteredEvidence = [...this.evidenceDataList];
      this.filteredEvidence = this.filteredEvidence.filter(item => {
        if (item.fullName.includes(searchText)) {
          return true;
        }
        else if (item.email.includes(searchText)) {
          return true;
        }
        else if (item.id.toString().includes(searchText)) {
          return true;
        }
        else {
          return false;
        }
      });
    }
  }

  closeModal(): void {
    this.modalCtrl.dismiss();
  }

}
