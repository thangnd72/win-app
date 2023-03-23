import * as React from 'react';
import { persistor, store } from '@redux/rootStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from '@navigators/RootNavigator';
import { Text, TextInput } from 'react-native';

// Disable font scaling
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
