import React, { useReducer, useMemo } from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'copstyle@Naver.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'test@test.com',
            active: false,
        },
        {
            id: 3,
            username: 'test22',
            email: 'test3@test.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        // 이미 깔끔하기 때문에 굳이 immer를 사용할 필요는 없다.
        // immer를 사용해야할 경우에만 사용하는 것이 좋다. (update의 경우가 까다로울 경우..)
        case 'CREATE_USER':
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        /* return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            }; */
        case 'TOGGLE_USER':
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        /* return {
                ...state,
                users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
            }; */
        case 'REMOVE_USER':
            return produce(state, (draft) => {
                const index = draft.users.findIndex((user) => user.id === action.id);
                draft.users.splice(index, 1);
            });
        /*  return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            }; */
        default:
            throw new Error('Unhandled Action');
    }
}

export const UserDispatch = React.createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성 사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
