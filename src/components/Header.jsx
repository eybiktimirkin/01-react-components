import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => {
    setNow(new Date());
  }, 1000);

  return (
    <header>
      <h1>Result University</h1>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
