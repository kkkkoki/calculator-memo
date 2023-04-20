export type CalculateState = {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
};

export type NumberCode =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '00';

export type Operator = '+' | '-' | '×' | '/';

export type ButtonCode = NumberCode | Operator | '=' | '.' | 'AC' | '%';
