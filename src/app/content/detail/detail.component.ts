import { Component, IterableDiffers } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NetworkService } from '../../services/network.service';
import { NetworkData } from '../../models/network-data';
import { Comment } from '../../models/comment';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  currentUser = null;
  query: string;
  differ: any;
  networkData = new NetworkData
  comment = new Comment
  comments: Comment[] = []
  idNetwork: number = null
  private subscriptionName: Subscription;
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    differs: IterableDiffers,
    private networkService: NetworkService){
    const idNetwork: number = route.snapshot.params.id
    this.idNetwork = idNetwork
    this.differ = differs.find([]).create(null);
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value;
          if(this.currentUser){
          }
        }
      });
    this.loadNetwork(idNetwork)
    this.loadComment()
  }

  ngDoCheck() {
    const change = this.differ.diff([this.currentUser]);
    if (change) {
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value;
        }
      });
    }
  }

  loadFromUpload(){
    this.subscriptionName= this.networkService.getUpdate().subscribe
    (message => { 
      this.loadNetwork(this.idNetwork)
    });
  }

  loadNetwork(id: number){
    this.networkService.getNetwork(id).subscribe(
      data => {
        this.networkData = data.object
      }, error => {
        console.log(error)
      }
    )
  }

  postComment(){
    this.comment.idNetwork = this.idNetwork
    this.networkService.commentPost(this.comment).subscribe(
      data => {
        this.comment.message = null
        this.loadComment()
      }, error => {
        console.log(error)
      }
    )
  }

  loadComment(){
    this.networkService.getAllComment(this.idNetwork).subscribe(
      data => {
        this.comments = data.object
        console.log(this.comments)
      }, error => {
        console.log(error)
      }
    )
  }
}

