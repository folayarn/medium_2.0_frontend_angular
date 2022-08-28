import { Component, Input, OnInit } from '@angular/core';
import Quill from 'quill';
import { HttpClient } from '@angular/common/http';
import BlotFormatter from 'quill-blot-formatter';
import { Store } from '@ngrx/store';
import { setError, setSuccess, setText } from '../../store/state.actions'
import { State } from 'src/app/store/state.reducer';


Quill.register('modules/blotFormatter', BlotFormatter);

import 'quill-emoji/dist/quill-emoji.js';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, window } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  config = {};
  user:any
  form: any;
  selectedFile: any;
  constructor(
    private client: HttpService,
    private http: HttpClient,
    private store: Store<State>,
    public modalRef: MdbModalRef<ModalComponent>,
    private title:Title,

  ) {
    this.title.setTitle("Home::Create new Article:Publish")
    this.config = {
      blotFormatter: {},
      syntax: false,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],

        [{ align: [] }],
        // remove formatting button
        [{ clean: [] }],
        ['link', 'image'],
        // link and image
      ],
    };
    store.select('reducers').pipe().subscribe(
      (data:any) => {
  this.user=data.user;


      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
    });
  }
  image: any;
  loading: any = false;
imgFile!: string
  onFileChange(e: any) {
    this.selectedFile = e.target.files[0];
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
      };
    }
  }
  data: any;
  items: [] = [];
  tags: any;
  text = 'Publish';
  getTags(event: any) {
    this.tags = event;
  }

  onChange(event: any) {
    console.log(event);
  }


  onPublish() {
    this.loading = true;
    if(!this.form.valid){
      this.store.dispatch(setError({ error: true }));
      this.store.dispatch(
        setText({ text: 'One or more Input is Empty, Fill all' })
      );
      this.loading = false;

    }else{
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    fd.append('upload_preset', 'spiy0dwb');
    this.http
      .post('https://api.cloudinary.com/v1_1/footepl/image/upload', fd)
      .subscribe(
        (res) => {
          this.image = res;
          this.data = {
            ...this.form!.value,
            author:this.user.Name,
            author_image:this.user.Image,
            location:this.user.Location,
            base_name:this.user.Username,
            tags: this.tags,
            image: this.image.url,
            user_id: this.user.ID,
          };
          this.client.createPost(this.data).subscribe(
            (resp) => {

              this.store.dispatch(setSuccess({ success: true }));
              this.store.dispatch(
                setText({ text: 'Article was published successfully' })
              );
              this.form.reset();
              this.tags=[]
              this.loading = false;

              this.modalRef.close()

            },
            (error) => {
              this.store.dispatch(setError({ error: true }));
              this.store.dispatch(
                setText({ text: 'Something went wrong, Failed' })
              );
              this.loading = false;
            }
          );
        },
        (err) => {
          this.store.dispatch(setError({ error: true }));
          this.store.dispatch(
            setText({ text: 'Something went wrong, Failed to upload image' })
          );
          this.loading = false;
        }
      );
  }
}
}
