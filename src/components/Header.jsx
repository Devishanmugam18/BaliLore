import { useState } from "react";
import { Menu,X } from "lucide-react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-ivory shadow-sm px-6 py-4 flex justify-between items-center">
            {/*site title */}
            <h1 className="text-2xl font-headline text-coral">
                <a href="/">Bali Lore</a>
            </h1>

            {/* Desktop navigation */}
            <nav aria-label="main-navigation" className="hidden md:flex space-x-6 font-body text-charcoal text-base">
                <a
                    href="/"    
                    className="hover:text-coral focus:text-coral transition-colors "
                    aria-current="page">
                    Home
                </a>
                <a
                    href="/stories"
                    className="hover:text-coral focus:text-coral transition-colors  ">
                    Stories
                </a>
                <a
                    href="/submit"
                    className="hover:text-coral focus:text-coral transition-colors ">
                    Submit
                </a>
            </nav>

            {/* Hamburger Menu(for mobile) */}
            <div className="md:hidden" >
                <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-ivory shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <a href="/" className="text-charcoal font-body text-base hover:text-coral " onClick={() => setIsOpen(false)}>Home</a>
          <a href="/stories" className="text-charcoal font-body text-base hover:text-coral" onClick={() => setIsOpen(false)}>Stories</a>
          <a href="/submit" className="text-charcoal font-body text-base hover:text-coral" onClick={() => setIsOpen(false)}>Submit</a>
        </div>
      )}
        </header>
    )
}