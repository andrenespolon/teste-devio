module.exports = {
  fix(number) {
    const _n = parseFloat(number).toPrecision(12);
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(_n);
  },
};
