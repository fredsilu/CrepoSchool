import React,  { useState, useEffect } from "react";
import Navigation from "navigation/Navigation"
import SplashScreen from "components/SplashScreen"
import { Provider } from 'react-redux'
import Store from "store/ConfigureStore"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

async function initialize() {
  // initialisation des differentes informations
}

const App = () => {
  let persistor = persistStore(Store)
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    initialize().then(() => {
      setIsAppReady(true);
    });
  }, []);

  return (
    <SplashScreen isAppReady={isAppReady}>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SplashScreen>
  )

};

export default App;
