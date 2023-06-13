import { Currency } from './enums/currency';
import { Language } from './enums/language';
import { TokenScope } from './enums/tokenScope';
import { Callback } from './types/callback';
import { Item } from './types/item';
import { Payer } from './types/payer';
import { Recurrence } from './types/recurrence';
import { Target } from './types/target';

type GoPayConfig = {
  goid: number;
  clientId: string;
  clientSecret: string;
  gatewayUrl: string;
  scope: TokenScope;
  language: Language;
  timeout: number;
};

type CreatePaymentConfig = {
  payer: Payer;
  target: Target;
  amount: number;
  currency: Currency;
  order_number: string;
  order_description: string;
  items: Item[];
  callback: Callback;
  lang: Language;
  additional_params: Record<string, string>;
  reccurence: Recurrence;
};

export class GoPay {
  protected readonly JSON = 'application/json';
  protected readonly FORM = 'application/x-www-form-urlencoded';

  protected readonly LOCALE_CZECH = 'cs-CZ';
  protected readonly LOCALE_ENGLISH = 'en-US';

  constructor(public config: GoPayConfig) {}

  createPayment(config: CreatePaymentConfig) {}

  captureAuthorization(preAuthorizationPaymentId: number) {}

  voidAuthorization(preAuthorizationPaymentId: number) {}

  getStatus(paymentId: number) {}

  refundPayment(paymentId: number) {}
}
