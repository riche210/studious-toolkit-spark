import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tools", label: "Tools" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const footerLinks = [
  { to: "/about", label: "About Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            <BookOpen className="w-6 h-6 text-primary" />
            SmartStudyTools
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-medium py-2 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-footer text-footer-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg text-primary-foreground mb-3">
                <BookOpen className="w-5 h-5" />
                SmartStudyTools
              </div>
              <p className="text-sm leading-relaxed">Free online student utility tools for India. Fast, accurate, and works on any device.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {footerLinks.map(link => (
                  <Link key={link.to} to={link.to} className="text-sm hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Contact</h4>
              <p className="text-sm">Email: contact@smartstudytools11@gmail.com</p>
              <p className="text-sm mt-1">Made with ❤️ for Indian students</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-muted-foreground/20 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} SmartStudyTools. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
