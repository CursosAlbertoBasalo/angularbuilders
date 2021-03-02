import { Injectable } from '@angular/core';
import { Track } from './models/track';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  track(track: Track) {
    // ToDo: send to to Analytics
    console.log(track);
  }
}
