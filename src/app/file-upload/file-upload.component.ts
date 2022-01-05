import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder,private http: HttpClient) { 
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit(): void {}


  uploadFile(event) {
    const file = (event.target as any).files[0];
    this.form.patchValue({
     avatar: file
    });
    (this.form.get('avatar') as any).updateValueAndValidity()
  }

  submitForm() {
    console.log(this.form.value);

   var formData: any = new FormData();
  formData.append("name", (this.form.get('name') as any).value);
  formData.append("avatar", (this.form.get('avatar') as any).value);

  this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )

  }

}
