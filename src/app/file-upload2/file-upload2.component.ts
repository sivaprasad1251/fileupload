import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload2',
  templateUrl: './file-upload2.component.html',
  styleUrls: ['./file-upload2.component.css']
})
export class FileUpload2Component implements OnInit {

  fileName = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}





  ngOnInit(): void {
  }

}
