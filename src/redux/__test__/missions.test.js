import missions, {
  joinMission,
  leaveMission,
} from '../missions/missions';

describe('Testing Mission state', () => {
  test('should return the initial state', () => {
    expect(missions(undefined, {})).toEqual([]);
  });

  test(' fetch mission should return updated state with missions', () => {
    const previousState = [];
    const payload = [
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        reserved: false,
      },
    ];
    const FETCH_MISSIONS = 'spaceTravelers/missions/FETCH_MISSIONS';
    const fetchData = (payload) => ({ type: FETCH_MISSIONS, payload });

    expect(missions(previousState, fetchData(payload))).toEqual(
      [
        {
          id: 1,
          name: 'Test mission',
          description: 'This is a test Mission',
          reserved: false,
        },
      ],
    );
  });

  test('Join mission should update the reserved status of a mission to true', () => {
    const previousState = [
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        reserved: false,
      },
    ];
    expect(missions(previousState, joinMission(1))).toEqual([
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        reserved: true,
      },
    ]);
  });

  test('Leave mission should update the reserved status of a mission to false', () => {
    const previousState = [
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        reserved: true,
      },
    ];
    expect(missions(previousState, leaveMission(1))).toEqual([
      {
        id: 1,
        name: 'Test mission',
        description: 'This is a test Mission',
        reserved: false,
      },
    ]);
  });
});
