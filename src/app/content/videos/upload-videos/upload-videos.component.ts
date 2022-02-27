import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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
  loading = false
  messageLoading = 'Upload';

  networkData = new NetworkData
  
  constructor(public dialog: MatDialog,
    private networkService: NetworkService) {
  }

  handleFileInput(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0)
      if (event.target.files && event.target.files[0]) {
        const formData = new FormData();
        formData.append('file-images', event.target.files.item(0));
        this.loading = true
        this.networkService.uploadFile(formData).subscribe(data => {
          this.loading = false
          this.networkData.path = data.url
        })
      }
    }
  }
}
