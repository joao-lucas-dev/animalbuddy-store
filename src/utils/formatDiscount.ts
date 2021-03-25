interface IResponse {
  discountValue: number;
  discountValueString: string;
}

export default function formatDiscount(
  value: string,
  totalPrice: number,
): IResponse {
  let discountValue = 0;
  let discountValueString = '';

  const numberPattern = /\d+/g;
  const valueOnlyNumber = value.match(numberPattern).join('');

  if (value.includes('%')) {
    discountValue = (totalPrice * Number(valueOnlyNumber)) / 100;
    discountValueString = discountValue.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    discountValue = Number(valueOnlyNumber);
    discountValueString = discountValue.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return { discountValue, discountValueString };
}
