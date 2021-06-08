const addUser = (data) => {
    return {
        type: 'ADD_USER',
        data
    }
}

const removeUser = (idUser) => {
    return {
        type: 'REMOVE_USER',
        idUser
    }
}

const setDataUsers = () => {
    return dispatch => {
        fetch('https://random-data-api.com/api/users/random_user?size=20')
            .then(response => response.json())
            .then(data => dispatch({type: 'SET_DATA_USERS',data}));
    }
};

export { setDataUsers, removeUser, addUser };