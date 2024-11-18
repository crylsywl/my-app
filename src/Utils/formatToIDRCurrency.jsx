function formatToIDRCurrency(value) {
  const numericValue = typeof value === "number" ? value : Number(value);  
  const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(numericValue);

    return formattedValue.replace('Rp', 'Rp. ');
  }

  export default formatToIDRCurrency