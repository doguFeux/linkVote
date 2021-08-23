export const initialState = {
    data: [
        {
            id: 0,
            score: 9,
            name: 'reddit',
            url: 'https://www.reddit.com'
        },
        {
            id: 1,
            score: 6,
            name: 'stackoverflow',
            url: 'https://www.stackoverflow.com'
        },
        {
            id: 2,
            score: 4,
            name: 'quara',
            url: 'https://www.quare.com'

        },
        {
            id: 3,
            score: 2,
            name: 'linkedin',
            url: 'https://www.linkedin.com'

        },
        {
            id: 4,
            score: 23,
            name: 'google',
            url: 'https://www.reddit.com'
        },
        {
            id: 5,
            score: 45,
            name: 'medium',
            url: 'https://www.stackoverflow.com'
        },
        {
            id: 6,
            score: 16,
            name: 'microsoft',
            url: 'https://www.quare.com'

        },
        {
            id: 7,
            score: 12,
            name: 'tesla',
            url: 'https://www.linkedin.com'

        },
    ],
    type: null,
    filterApplied: false,
    currentPage: 1,
};


const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {

        case "CHANGE_ORDER":
            return {
                ...state,
                filterApplied: true
            }
        case "SET_FILTER_PROP":
            debugger;
            return {
                ...state,
                type: action.payload,
            }
        case "DELETE_ITEM":
            return {
                ...state,
                data: action.payload,
            }
        case "ADD_ITEM":
            return {
                ...state,
                data: [action.payload, ...state.data],
            }
        case "UPDATE_SCORE":
            debugger;
            return {
                ...state,
            }
        case "SET_CURRENT_PAGE":
            debugger;
            return {
                ...state,
                currentPage:action.payload

            }


        default:
            return {
                ...state,
            }
    }
}

export default reducer;