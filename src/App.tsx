import 'intl';
import 'intl/locale-data/jsonp/en-US';
import 'intl/locale-data/jsonp/zh-Hant';
import 'intl/locale-data/jsonp/zh-Hans';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RawIntlProvider, IntlShape } from 'react-intl';

import { INTL_CONFIGS } from 'intl.config';
import { intlService } from 'lib/intl/IntlService';
import { ScreenKey, RootStackParams } from './screen/ScreenProps';
import HomeScreen from './screen/home/HomeScreen';
import DetailsScreen from './screen/details/DetailsScreen';
import SettingScreen from './screen/setting/SettingScreen';

intlService.addConfig(...INTL_CONFIGS);
intlService.useLocale('en-US');

const Stack = createStackNavigator<RootStackParams>();

const App: React.FC = () => {
  const [intl, setIntl] = React.useState<IntlShape>(intlService.intl);

  React.useEffect(() => {
    const intlSubscrption = intlService.intl$.subscribe({ next: setIntl });

    return () => {
      intlSubscrption.unsubscribe();
    };
  }, []);

  return (
    <RawIntlProvider value={intl}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreenKey.Home}
            component={HomeScreen}
            options={{
              title: intlService.formatMessage({ id: 'homeScreenTitle' }),
            }}
          />
          <Stack.Screen
            name={ScreenKey.Details}
            component={DetailsScreen}
            options={({ route }) => ({
              title: intlService.formatMessage({
                id:
                  route.params && route.params.id
                    ? 'detailsScreenTitle_edit'
                    : 'detailsScreenTitle_add',
              }),
            })}
          />
          <Stack.Screen
            name={ScreenKey.Setting}
            component={SettingScreen}
            options={{
              title: intlService.formatMessage({ id: 'settingScreenTitle' }),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RawIntlProvider>
  );
};

export default App;
