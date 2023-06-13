import { RecurrenceState } from '../enums/recurrenceState';

export type Recurrence = {
  recurrence_cycle: string;
  recurrence_period: number;
  recurrence_date_to: string;
  recurrence_state: RecurrenceState;
};
