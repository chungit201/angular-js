import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FriendModel } from '../model/friend-model';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private http: HttpClient) {}
}
