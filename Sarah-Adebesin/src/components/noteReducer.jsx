import uuid from 'uuid/v1';

export const noteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, {
                title: action.note.title,
                body: action.note.body,
                id: uuid()
            }]
            case 'DELETE_NOTE':
                return state.filter(note => note.id !== action.id)
            default:
                return state
    }
}