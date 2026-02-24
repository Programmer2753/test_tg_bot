import React, { useState } from "react";

const ideas = [
  "Идея для аватарки",
  "Идея для превью",
  "Идея для баннера",
  "Другое AI предложение"
];

export default function AIGenerator() {
  const [idea, setIdea] = useState("");

  const generateIdea = () => {
    setIdea(ideas[Math.floor(Math.random() * ideas.length)]);
  };

  return (
    <div>
      <h1>AI Генератор идей</h1>
      <button onClick={generateIdea}>Генерировать</button>
      {idea && <p className="generated-idea">{idea}</p>}
    </div>
  );
}
