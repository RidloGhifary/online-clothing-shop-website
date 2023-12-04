export default function toCurrency(amount) {
  return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}