import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[var(--color-pink)]" style={{ height: 'var(--navbar-height)' }}>
      {/* Use Tailwind's container for responsive centering */}
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Left side: purple square for logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-600" />
        </div>

        {/* Right side: nav links */}
        <div className="flex items-center space-x-8">
          <Link href="#about">
            <span className="text-xl hover:text-gray-200 transition" style={{ color:'var(--color-dark-purple)'}} ><b>About</b></span>
          </Link>
          <Link href="#contact">
            <span className="text-xl hover:text-gray-200 transition" style={{ color:'var(--color-dark-purple)'}}><b>Contact</b></span>
          </Link>
          <Link href="#join">
            <span className="text-xl hover:text-gray-200 transition" style={{ color:'var(--color-dark-purple)'}}><b>Join</b></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
