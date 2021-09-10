import { Observable } from 'rxjs';
import { Activity } from '../domain/activity';

export abstract class ActivityRepository {
  abstract getAllActivity(): Observable<Activity>;
}
