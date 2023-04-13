import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent {
  feedData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.postFeedData().subscribe((response) => {
      this.feedData = response.response;
      this.feedData.images = response.response.images;
      console.log('feedData:', this.feedData); 
    });
  }
}
 