import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OrderbookScreen} from '../screens/Orderbook';

type RootStackParamsList = {
  Orderbook: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions = {headerShown: false};

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Orderbook" component={OrderbookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
