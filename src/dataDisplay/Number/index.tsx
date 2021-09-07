import React from 'react';
import { RequireAtLeastOne } from '../../typings/utilities';

const DEFAULT_SHOW_DECIMALS = true;
const DEFAULT_SHOW_THOUSAND_SEPARATORS = false;

type FormatNumberOptions = RequireAtLeastOne<{
  roundingType?: 'up' | 'down';
  showDecimals?: boolean;
  decimalPlaces?: number;
  showThousandSeparators?: boolean;
  currency?: string;
}>;

export const formatNumber = (
  value: string,
  options: FormatNumberOptions
): string => {
  if (isNaN(+value)) {
    return value;
  }

  const decimalIndex = value.indexOf('.');

  const {
    // None or length of the decimals places in input
    decimalPlaces = decimalIndex === -1 ? 0 : value.length - decimalIndex - 1,
    roundingType,
    showDecimals = DEFAULT_SHOW_DECIMALS,
    showThousandSeparators = DEFAULT_SHOW_THOUSAND_SEPARATORS,
    currency,
  } = options;

  const maximumFractionDigits =
    showDecimals === false || decimalPlaces === 0 || roundingType
      ? 0
      : decimalPlaces;

  const number = roundingType
    ? Math[roundingType === 'up' ? 'ceil' : 'floor'](+value)
    : +value;

  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits,
    useGrouping: showThousandSeparators,
    ...(currency && { style: 'currency', currency }),
  }).format(number);
};

type Props = {
  value: string;
} & FormatNumberOptions;

const Number = ({
  value,
  showDecimals = DEFAULT_SHOW_DECIMALS,
  showThousandSeparators = DEFAULT_SHOW_THOUSAND_SEPARATORS,
  ...rest
}: Props): React.ReactElement => (
  <>{formatNumber(value, { showDecimals, showThousandSeparators, ...rest })}</>
);

export default Number;
