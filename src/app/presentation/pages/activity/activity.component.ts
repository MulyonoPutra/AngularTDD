import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/core/domain/activity';
import { GetAllActivityUsecase } from 'src/app/core/usecase/get-all-activity.repository';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  activities!: Array<Activity>;

  constructor(private getAllActivity: GetAllActivityUsecase) {}

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities() {
    this.activities = [];
    this.getAllActivity.execute().subscribe((value: Activity) => {
      this.activities.push(value);
    });
  }

  onSelect(event: any) {
    console.log(event.target);
  }
}
