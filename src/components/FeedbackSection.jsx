import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input Value: {show && input.current.value}</h3>

      <input ref={input} onKeyDown={handleKeyDown} className="control" />
    </div>
  );
}

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("error");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  return (
    <section>
      <h1>Обратная связь</h1>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{ border: hasError ? "1px solid red" : null }}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Помощь</option>
          <option value="suggest">Предложение</option>
        </select>
      </form>

      <StateVsRef />

      <Button disabled={hasError} isActive={!hasError}>
        Отправить
      </Button>
    </section>
  );
}
