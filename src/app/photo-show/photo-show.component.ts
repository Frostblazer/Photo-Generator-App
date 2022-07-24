import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string = '';

  constructor(private fetchPhotoService: FetchPhotoService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.fetchPhotoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit(): void {}
}
