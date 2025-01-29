import { pureAddUserCallback } from '../HW3';
import { UserType } from '../HW3';

let initialState: UserType[];
const setUsers = (users: UserType[]) => {
    initialState = users;
}

beforeEach(() => {
    initialState = [];
})

test('Добавление пользователя', () => {
    pureAddUserCallback('name', setUsers as React.Dispatch<React.SetStateAction<UserType[]>>, initialState);

    expect(initialState.length).toBe(1);
    expect(initialState[0].name).toBe('name');
    expect(!!initialState[0]._id).toBe(true);
});
