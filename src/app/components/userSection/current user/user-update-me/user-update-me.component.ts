import { UsersService } from './../../../../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update-me',
  templateUrl: './user-update-me.component.html',
  styleUrls: ['./user-update-me.component.css'],
})
export class UserUpdateMeComponent implements OnInit {
  constructor(private service: UsersService) {}
  imagePreview: string;
  userUpdate = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  pickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.userUpdate.patchValue({ image: file });
    this.userUpdate.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  updateMe() {
    console.log(this.userUpdate.value);
    this.service.updateMe(
      this.userUpdate.value.name,
      this.userUpdate.value.email,
      this.userUpdate.value.image
    );

    this.userUpdate.reset();
  }

  ngOnInit(): void {}
}
