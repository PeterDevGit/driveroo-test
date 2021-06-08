const initialState = {
    users: []
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DATA_USERS' : {
            return {
                ...state,
                users: action.data
            }
        }
        case 'REMOVE_USER' : {
            const updatedUser = state.users.filter(el => el.id !== action.idUser);
            return {
                ...state,
                users: updatedUser
            }
        }

        case 'ADD_USER': {
             return {
                 ...state,
                 users: [action.data, ...state.users]
             }
        }

        default: return state;
    }
}