import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { frontendAPI } from './api'
import productReducer from './slice/product'

const storage = createWebStorage('local')

const productPersistConfig = {
  key: 'products',
  storage,
}

export const makeStore = () => {
  return configureStore({
    reducer: {
      [frontendAPI.reducerPath]: frontendAPI.reducer,
      products: persistReducer(productPersistConfig, productReducer),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([frontendAPI.middleware]),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const store = makeStore()

export const persistor = persistStore(store)
