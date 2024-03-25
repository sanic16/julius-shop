const themeReducer = (state: Theme, action: { type: Primary | Background }): Theme => {
    switch (action.type){
        case 'color-1':
            return {
                ...state,
                primary: 'color-1',
            }
        case 'color-2':
            return {
                ...state,
                primary: 'color-2',
            }
        case 'color-3':
            return {
                ...state,
                primary: 'color-3',
            }
        case 'color-4':
            return {
                ...state,
                primary: 'color-4',
            }
        case 'color-5':
            return {
                ...state,
                primary: 'color-5',
            }
        case 'color-6':
            return {
                ...state,
                primary: 'color-6',
            }
        case 'color-7':
            return {
                ...state,
                primary: 'color-7',
            }
        case 'color-8':
            return {
                ...state,
                primary: 'color-8',
            }
        case 'background-1':
            return {
                ...state,
                background: 'background-1',
            }
        case 'background-2':
            return {
                ...state,
                background: 'background-2',
            }
        default:
            return state
    }
}

export default themeReducer