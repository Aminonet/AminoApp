import { changeText } from './action';

const mainReducer = (state, action) => {
    console.log(action)
    const newState = state
    const score = action.score;

    switch (action.type) {
        case 'ing':
            return {
                ...newState,
                score: 'change' + score
            };

        default:
            return {
                ...newState,
                score: 0,
                text: '111'
            }
    }
};

export default mainReducer;
