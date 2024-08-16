
const initialState = {
    users: null
}

export default function users(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case 'users':
            return {
                ...state,
               users:payload
            }

        default:
            return state
    }


}