import { Text, View } from "react-native"
import { Provider } from "react-redux"
import {store} from '../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)
export default ()=>{
  return <Provider  store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Text className="text-2xl" >Hello Expo</Text>
    </PersistGate>
  </Provider>
}