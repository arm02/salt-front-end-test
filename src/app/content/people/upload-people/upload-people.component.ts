import { Component, VERSION } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NetworkService } from '../../../services/network.service';
import { NetworkData } from '../../../models/network-data';

@Component({
  selector: 'upload-people-component',
  templateUrl: './upload-people.component.html',
  styleUrls: [ './upload-people.component.css' ]
})
export class UploadPeopleComponent  {
  fileToUpload: File = null;
  isLoading = false
  messageLoading = 'Upload';

  networkData = new NetworkData
  
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<UploadPeopleComponent>,
    private networkService: NetworkService) {
  }

  handleFileInput(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0)
      if (event.target.files && event.target.files[0]) {
        const formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.isLoading = true
        this.messageLoading = 'Uploading Work'
        this.networkService.uploadFile(formData).subscribe(data => {
          this.isLoading = false
          this.messageLoading = 'Submit'
          this.networkData.path = data.url
        })
      }
    }
  }

  handleFileInputBanner(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0)
      if (event.target.files && event.target.files[0]) {
        const formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.isLoading = true
        this.messageLoading = 'Uploading Banner'
        this.networkService.uploadFile(formData).subscribe(data => {
          this.isLoading = false
          this.messageLoading = 'Upload'
          this.networkData.file = data.url
        })
      }
    }
  }

  uploadWork(){
    this.messageLoading = 'Checking Data'
    this.isLoading = true
    this.networkData.views = 0
    this.networkData.type = 'PEOPLE'
    this.networkService.uploadNetwork(this.networkData).subscribe(data => {
      this.isLoading = false
      this.messageLoading = 'Upload'
      this.dialogRef.close(true);
    })
  }
}
