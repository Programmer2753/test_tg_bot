import React from "react";
import reviews from "../data/reviews.json";

export default function Reviews() {
  return (
    <div className="card">
      <h3>Отзывы клиентов</h3>
      {reviews.map((r, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#ff3040",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            marginRight: 8
          }}>
            {r.name[0].toUpperCase()}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{r.name}</div>
            <div className="muted">{r.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
