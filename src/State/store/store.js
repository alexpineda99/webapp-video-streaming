import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers/index";
import storage from "redux-persist/lib/storage";
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userState"]
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:{
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }})
});

store.subscribe(()=>store);

export default store;