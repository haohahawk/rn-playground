import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum ScreenKey {
  Home = 'Home',
  Details = 'Details',
  Setting = 'Setting',
}

export type RootStackParams = {
  [ScreenKey.Home]: undefined;
  [ScreenKey.Details]: { id: string } | undefined;
  [ScreenKey.Setting]: undefined;
};

export type ScreenProps = {
  [key in ScreenKey]: {
    route: RouteProp<RootStackParams, key>;
    navigation: StackNavigationProp<RootStackParams, key>;
  };
};
