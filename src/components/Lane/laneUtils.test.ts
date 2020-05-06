import { renderTitle } from './laneUtils';

describe('renderTitle()', () => {
  test('it should render proper title', () => {
    expect(renderTitle('to-do')).toBe('To Do');
    expect(renderTitle('in-progress')).toBe('In Progress');
    expect(renderTitle('done')).toBe('Done');
  });
});
