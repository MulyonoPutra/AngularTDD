import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { Activity } from '../domain/activity';
import { ActivityRepository } from '../repository/activity.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllActivityUsecase implements UseCase<void, Activity> {
  constructor(private activityRepository: ActivityRepository) {}

  execute(params: void): Observable<Activity> {
    return this.activityRepository.getAllActivity();
  }
}
