import { ValueObject } from "../../../core/src/index.ts";

type AmountProps = {
  value: number;
  currency: string;
}

export default class Amount extends ValueObject<AmountProps> {
  // Can't use the `new` keyword from outside the scope of the class.
  private constructor(props: AmountProps) {
    super(props);
  }

  get value(): number {
    return this.props.value;
  }

  get currency(): number {
    return this.props.value;
  }

  public static create(amount: number, currency: string): Amount {
    if (amount <= 0) {
      throw Error(`Provided amount ${amount} is invalid`);
    } else {
      return new Amount({ value: amount, currency });
    }
  }
}