"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        paddingTop: "4vw",
      }}
    >
      <h1 style={{ color: "white", fontSize: "3vw" }}>Page Not found – 404!</h1>
      <div>
        <Link style={{ color: "#00bfff", fontSize: "2vw" }} href="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
