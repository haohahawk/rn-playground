import { OptionalIntlConfig } from 'lib/intl/IntlService';

export const INTL_CONFIGS: OptionalIntlConfig[] = [
  {
    locale: 'en-US',
    messages: {
      homeScreenTitle: 'Home',
      detailsScreenTitle_add: 'Add Details',
      detailsScreenTitle_edit: 'Edit Details',
      settingScreenTitle: 'Setting',
      selectalanguage: 'Select a language',
    },
  },
  {
    locale: 'zh-Hant',
    messages: {
      homeScreenTitle: '首頁',
      detailsScreenTitle_add: '新增明細',
      detailsScreenTitle_edit: '編輯明細',
      settingScreenTitle: '設定',
      selectalanguage: '選語言',
    },
  },
  {
    locale: 'zh-Hans',
    messages: {
      homeScreenTitle: '首页',
      detailsScreenTitle_add: '新增明細',
      detailsScreenTitle_edit: '编辑明細',
      settingScreenTitle: '设置',
      selectalanguage: '选语言',
    },
  },
];
