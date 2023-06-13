import { BankSwiftCode } from '../enums/bankSwiftCode';
import { PaymentInstrument } from '../enums/paymentInstrument';
import { Contact } from './contact';

export type Payer = {
  allowed_payment_instruments: PaymentInstrument[];
  default_payment_instrument: PaymentInstrument;
  default_swift: BankSwiftCode;
  allowed_swifts: BankSwiftCode[];
  verify_pin?: string;
  allowed_card_token?: string;
  email?: string;
  contact: Contact;
};
