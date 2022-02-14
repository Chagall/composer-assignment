import { createStore, combineReducers } from "redux";
import { textAlignReducer } from "./reducers/ComposerReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ textAlign: textAlignReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;