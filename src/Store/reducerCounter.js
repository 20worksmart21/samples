
const initState = {
    home: {
        url: '/carousel',
    },
    tab1: {
        url: '/todo',
        children: {
            children1: {
                url: '/tab1/children1',
            },
            children2: {
                url: '/tab1/children2',
            }
        }
    },
    tab2: {
        url: '/directory',
        children: {
            children1: {
                url: '/tab2/children1',
            },
            children2: {
                url: '/tab2/children2',
            },
            children3: {
                url: '/tab2/children2',
            }
        }
    }
}
const reducer = (state = initState, action) => {
    return state
}

export default reducer;