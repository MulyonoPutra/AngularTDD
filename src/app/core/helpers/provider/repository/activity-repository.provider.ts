import { ActivityRepository } from "src/app/core/repository/activity.repository";
import { ActivityWebRepository } from "src/app/data/repository/activity-web-repository/activity-web-repository";


export const ActivityProvider = [
  { provide: ActivityRepository, useClass: ActivityWebRepository },
];
