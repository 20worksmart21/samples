const initState = {
    imageArray: [1, 2, 3, 4, 5],
}
const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LEFT':
            return {
                ...state,
                ...payload,
            }
        case 'RIGHT':
        default:
            return {
                ...state,
                ...payload,
            }
    }
}

export default reducer;