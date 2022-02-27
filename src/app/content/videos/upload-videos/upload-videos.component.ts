import { Component, VERSION } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { NetworkService } from '../../../services/network.service';
import { NetworkData } from '../../../models/network-data';

@Component({
  selector: 'upload-videos-component',
  templateUrl: './upload-videos.component.html',
  styleUrls: [ './upload-videos.component.css' ]
})
export class UploadVideosComponent  {
  fileToUpload: File = null;
  isLoading = false
  messageLoading = 'Upload';

  networkData = new NetworkData
  
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<UploadVideosComponent>,
    private networkService: NetworkService) {
  }

  handleFileInput(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0)
      if (event.target.files && event.target.files[0]) {
        const formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.isLoading = true
        this.networkService.uploadFile(formData).subscribe(data => {
          this.isLoading = false
          this.networkData.path = data.url
        })
      }
    }
  }

  uploadVideos(){
    this.isLoading = true
    this.networkData.views = 0
    this.networkData.type = 'VIDEO'
    this.networkService.uploadNetwork(this.networkData).subscribe(data => {
      console.log(data)
      this.isLoading = false
      this.dialogRef.close(true);
    })
  }
}
