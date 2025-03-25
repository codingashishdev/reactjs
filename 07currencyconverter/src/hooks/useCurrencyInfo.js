import { useEffect, useState } from "react";

/**
 * A custom React hook that fetches and returns currency exchange rate information.
 * 
 * @param {string} currency - The base currency code to fetch exchange rates for (e.g., 'usd', 'eur')
 * @returns {Object} An object containing exchange rates for the specified currency against other currencies
 * 
 * @example
 * // Get USD exchange rates
 * const usdRates = useCurrencyInfo('usd');
 * // Access specific exchange rate
 * const usdToEur = usdRates.eur;
 */

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;