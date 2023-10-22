import { Injectable } from '@angular/core';
import { IGoal } from '../models/goal';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class goalListService extends ResourceService<IGoal> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient);
  }
  getResourceUrl(): string {
    return 'goalList';
  }
}
