import * as React from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { intlService } from 'lib/intl/IntlService';
import { ScreenProps, ScreenKey } from 'screen/ScreenProps';

const localeOptions = [
  {
    locale: 'en-US',
    language: 'English',
  },
  {
    locale: 'zh-Hant',
    language: '繁體中文',
  },
  {
    locale: 'zh-Hans',
    language: '简体中文',
  },
];

function SettingScreen({ navigation }: ScreenProps[ScreenKey.Setting]) {
  const [locale, setLocale] = React.useState(intlService.intl.locale);

  const changeLanguage = (newLocale: string) => {
    intlService.useLocale(newLocale);
    setLocale(newLocale);
  };

  const save = () => {
    console.log('save', navigation);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{intlService.formatMessage({ id: 'selectalanguage' })}</Text>
      <Picker
        selectedValue={locale}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => changeLanguage(itemValue)}>
        {localeOptions.map((l, i) => (
          <Picker.Item key={i} label={l.language} value={l.locale} />
        ))}
      </Picker>
      <Button title="Save" onPress={save} />
    </View>
  );
}

export default SettingScreen;
