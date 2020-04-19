import {
  createIntlCache,
  createIntl,
  IntlShape,
  IntlCache,
  IntlConfig,
  MessageDescriptor,
} from 'react-intl';
import { BehaviorSubject, Observable } from 'lib/simple-rxjs';

const DEFAULT_INTL_CONFIG: Pick<
  IntlConfig,
  | 'formats'
  | 'messages'
  | 'timeZone'
  | 'textComponent'
  | 'defaultLocale'
  | 'defaultFormats'
  | 'onError'
> = {} as any;

export type OptionalIntlConfig = Omit<
  IntlConfig,
  keyof typeof DEFAULT_INTL_CONFIG
> &
  Partial<typeof DEFAULT_INTL_CONFIG>;

class IntlService {
  private storeConfigs: OptionalIntlConfig[] = [];
  private storeIntl = new BehaviorSubject<IntlShape>({} as any);

  readonly cache: IntlCache = createIntlCache();
  readonly intl$: Observable<IntlShape> = this.storeIntl.asObservable();

  get intl() {
    return this.storeIntl.getValue();
  }

  get locales() {
    return this.storeConfigs.map((c) => c.locale);
  }

  addConfig(...configs: OptionalIntlConfig[]) {
    const configsNew = this.storeConfigs.concat(configs);
    this.setConfigs(configsNew);
  }

  formatMessage(descriptor: MessageDescriptor): string {
    return this.storeIntl.getValue().formatMessage(descriptor);
  }

  useLocale(locale: string) {
    const config = this.storeConfigs.find((c) => c.locale === locale);
    if (!config) {
      throw new Error(`no '${locale}' locale config`);
    }
    this.setIntl(config);
  }

  private setConfigs(configs: OptionalIntlConfig[]) {
    this.storeConfigs = configs;
  }

  private setIntl(config: OptionalIntlConfig) {
    const intl = createIntl(config, this.cache);
    this.storeIntl.next(intl);
    this.formatMessage = intl.formatMessage;
  }
}

export const intlService = new IntlService();
