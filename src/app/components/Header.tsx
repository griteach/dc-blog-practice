import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-6">
      <Link href={`/`} className="text-3xl font-bold">{`Griteach`}</Link>
      <nav className="flex gap-4">
        <Link href={`/`}>home</Link>
        <Link href={`/about`}>about</Link>
        <Link href={`/posts`}>posts</Link>
        <Link href={`/contact`}>contact</Link>
      </nav>
    </header>
  );
}
