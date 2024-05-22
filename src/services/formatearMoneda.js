const formatearMoneda = (cantidad) => {
  const formatoMonedaUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  return formatoMonedaUSD.format(cantidad);
}

export default formatearMoneda;