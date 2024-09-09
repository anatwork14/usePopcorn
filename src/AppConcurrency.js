// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function AppConcurrency() {
  const [amount, setAmount] = useState("");
  const [fromConcurrency, setFromConcurrency] = useState("EUR");
  const [toConcurrency, setToConcurrency] = useState("USD");
  const [output, setOutput] = useState("OUTPUT");
  const [isLoading, setIsLoading] = useState(false);
  function handleChangeFromConcurrency(e) {
    setFromConcurrency(e.target.value);
  }
  function handleChangeToConcurrency(e) {
    setToConcurrency(e.target.value);
  }
  function handleChangeAmount(e) {
    setAmount(Number(e.target.value));
  }
  useEffect(() => {
    const controller = new AbortController();

    async function fetchConcurrency() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromConcurrency}&to=${toConcurrency}`,
        { signal: controller.signal }
      );
      const data = await res.json();
      console.log(data);
      setOutput(data.rates[toConcurrency]);
      setIsLoading(false);
    }
    if (fromConcurrency === toConcurrency) return setOutput(amount);
    fetchConcurrency();
  }, [amount, fromConcurrency, toConcurrency]);
  return (
    <div>
      <input type="text" value={amount} onChange={handleChangeAmount} />
      <select
        value={fromConcurrency}
        onChange={handleChangeFromConcurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="SGD">SGD</option>
      </select>
      <select
        value={toConcurrency}
        onChange={handleChangeToConcurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="SGD">SGD</option>
      </select>
      <p>
        {isLoading ? "Loading..." : output} {toConcurrency}
      </p>
    </div>
  );
}
