import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap cs">
            <h1 className="cs-title">Page not found.</h1>
      <Link href="/" className="btn">Go home</Link>
    </main>
  );
}
