import { THREEDS } from '../enums/3DS';

export type PaymentCard = {
  card_number: string;
  card_expiration: string;
  card_brand: string;
  card_issuer_country: string;
  card_issuer_bank: string;
  card_token: string;
  three_ds_result: THREEDS;
};
