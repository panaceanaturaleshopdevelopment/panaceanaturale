export const PACKAGE_PRICE_RSD = 1500;

export function formatPriceRSD(amount: number, language: "sr" | "en") {
  return new Intl.NumberFormat(language === "sr" ? "sr-RS" : "en-US").format(amount);
}
