import { Component, VERSION } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NetworkService } from '../services/network.service';
import { NetworkData } from '../models/network-data';

@Component({
  selector: 'upload-content-component',
  templateUrl: './upload-content.component.html',
  styleUrls: [ './upload-content.component.css' ]
})
export class UploadContentComponent  {
  fileToUpload: File = null;
  isLoading = false
  messageLoading = 'Upload';

  networkData = new NetworkData
  
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<UploadContentComponent>,
    private networkService: NetworkService) {
      this.networkData.type = 'VIDEO'
  }

  handleFileInput(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0)
      if (event.target.files && event.target.files[0]) {
        const formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.isLoading = true
        this.messageLoading = 'Uploading Network'
        this.networkService.uploadFile(formData).subscribe(data => {
          this.isLoading = false
          this.messageLoading = 'Upload'
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

  uploadNetwork(){
    this.messageLoading = 'Checking Data'
    this.isLoading = true
    this.networkData.views = 0
    this.networkService.uploadNetwork(this.networkData).subscribe(data => {
      this.isLoading = false
      this.messageLoading = 'Upload'
      this.dialogRef.close(true);
      window.location.reload()
    })
  }

}
