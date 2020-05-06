import { LANE_TYPE } from '../../utils/enums';

export const renderTitle = (type: string) => {
  let title;
  switch (type) {
    case LANE_TYPE.TO_DO:
      title = 'To Do';
      break;
    case LANE_TYPE.IN_PROGRESS:
      title = 'In Progress';
      break;
    case LANE_TYPE.DONE:
      title = 'Done';
      break;
    default:
      title = 'N/A';
      break;
  }

  return title;
};
