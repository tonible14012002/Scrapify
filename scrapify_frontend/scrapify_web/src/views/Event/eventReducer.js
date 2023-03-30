


const eventReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            return action.data

        default:
            return [...state]
    }
}

export default eventReducer
