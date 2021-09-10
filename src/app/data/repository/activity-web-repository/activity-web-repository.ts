import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivityWebEntity } from './activity-web-entity';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Activity } from 'src/app/core/domain/activity';
import { ActivityRepository } from 'src/app/core/repository/activity.repository';
import { ActivityWebRepositoryMapper } from './activity-web-repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class ActivityWebRepository extends ActivityRepository {
  mapper = new ActivityWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getAllActivity(): Observable<Activity> {
    return this.http
      .get<ActivityWebEntity[]>(environment.baseUrl)
      .pipe(mergeMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
