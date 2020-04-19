import * as React from 'react';
import { View, Button } from 'react-native';
import { ScreenProps, ScreenKey } from '../ScreenProps';

function HomeScreen({ navigation }: ScreenProps[ScreenKey.Home]) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(ScreenKey.Details)}
      />
    </View>
  );
}

export default HomeScreen;
