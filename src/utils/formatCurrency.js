export function formatCurrency(
    cents, 
    { locale = "en-NZ", currency = "NZD" } = {} 
) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency
    }).format(cents / 100);
};