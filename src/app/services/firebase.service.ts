import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private downloadURL?: any;
  private task?: AngularFireUploadTask;
  public ta: string = 'aaa';

  constructor(private storage: AngularFireStorage) {}

  public async uploadImage(image: any): Promise<any> {
    console.log(image);
    if (!this.storage) {
      console.log(1);
    }
    // const fileRef: any = this.storage.ref(`images2/${image.name}`);
    // this.task = await fileRef.put(image);
    // this.task
    //   ?.snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.downloadURL = fileRef.getDownloadURL();
    //       this.downloadURL.subscribe((url: any) => {
    //         return url;
    //       });
    //     })
    //   )
    //   .subscribe((url: any) => {
    //     // console.log(url);
    //   });
  }
}
