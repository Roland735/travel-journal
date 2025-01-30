import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/camera">Camera</Link>
        </nav>
    );
}
