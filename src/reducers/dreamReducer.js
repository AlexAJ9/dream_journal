import dreamService from '../services/dreams'

export const newDream = (data) => {
    return async dispatch => {
        const dream = await dreamService.create(data)
        dispatch({
            type: 'NEW_DREAM',
            data: dream
        })
    }
}

export const initDreams = (data) => {
    return async dispatch => {
        const dreams = await dreamService.getAll(data)
        dispatch({
            type: 'INIT',
            data: dreams
        })
    }
}

export const deleteDream = (data) => {
    return async dispatch => {
        const toDelete = await dreamService.remove(data)
        dispatch({
            type: 'DELETE',
            data: data.id
        })
    }
}
export const updateDream = (dream) => {
    return async dispatch => {
        const toEdit = await dreamService.update(dream)
        dispatch({
            type: 'EDIT',
            data: dream
        })
    }
}
const dreamsReducer = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case 'INIT': return action.data
        case 'NEW_DREAM': return [...state, action.data]
        case 'EDIT': return state.map(dream => dream.id !== action.data.id ? dream : action.data)
        case 'DELETE': return state.filter(x => x.id !== action.data)
        default: return state
    }

}

export default dreamsReducer