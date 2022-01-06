import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EvidenceFileViewModel } from './models/evidence.model';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {

  evidenceFileListSubject: BehaviorSubject<EvidenceFileViewModel[]> = new BehaviorSubject([] as EvidenceFileViewModel[]);
  evidenceFileList: EvidenceFileViewModel[] = [];

  constructor() { }

  getEvidenceList(): Observable<EvidenceFileViewModel[]> {
    return this.evidenceFileListSubject.asObservable();
  }

  addNewEvidenceFile(selectedFile: File) {
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, 'UTF-8');

    fileReader.onload = () => {
      const evidenceFile: EvidenceFileViewModel =
        { name: selectedFile.name, lastModifiedDate: selectedFile.lastModified, evidenceData: JSON.parse(fileReader.result as string) };
      this.evidenceFileList.push(evidenceFile);
      this.evidenceFileListSubject.next(this.evidenceFileList);
    };

    fileReader.onerror = (error) => {
      console.log(error);
    };
  }


}
