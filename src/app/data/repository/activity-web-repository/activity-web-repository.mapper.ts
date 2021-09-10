import { Mapper } from 'src/app/core/base/mapper';
import { Activity } from 'src/app/core/domain/activity';
import { ActivityWebEntity } from './activity-web-entity';

export class ActivityWebRepositoryMapper extends Mapper<
  ActivityWebEntity,
  Activity
> {
  mapFrom(param: ActivityWebEntity): Activity {
    return {
      id: param.id,
      username: param.username,
      position: param.position,
      createdDate: new Date(param.createdDate),
      title: param.title,
      action: param.action,
      views: param.views,
    };
  }

  mapTo(param: Activity): ActivityWebEntity {
    return {
      id: 0,
      username: param.username,
      position: param.position,
      createdDate: param.createdDate,
      title: param.title,
      action: param.action,
      views: param.views,
    };
  }
}
