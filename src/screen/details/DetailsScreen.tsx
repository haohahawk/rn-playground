import * as React from 'react';
import { View, Button } from 'react-native';
import { ScreenProps, ScreenKey } from '../ScreenProps';

function DetailsScreen({ navigation }: ScreenProps[ScreenKey.Details]) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go Setting"
        onPress={() => navigation.push(ScreenKey.Setting)}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push(ScreenKey.Details)}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(ScreenKey.Home)}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailsScreen;
