import { TOOGLE_MENU } from "../actions/types";

const initialState = {
    menuVisible: false
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case TOOGLE_MENU:
            return { menuVisible: !state.menuVisible };
        default:
            return state;
    }
};
