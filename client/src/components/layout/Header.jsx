import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  Building,
  Hammer,
  ShoppingBag,
  Users,
  Phone,
  Lock,
  Trophy,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_TITLE } from "../../data/company";
import { cn } from "../../utils/utils";
import { fadeIn, fadeInDown, fadeInRight } from "../../utils/animations";
import logo from "@/assets/Logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: (
        <Building
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "About",
      path: "/about",
      icon: (
        <Hammer
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "Products",
      path: "/products",
      icon: (
        <ShoppingBag
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "Services",
      path: "/services",
      icon: (
        <Users
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "Kavash",
      path: "/kavash",
      icon: (
        <Sparkles
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "Achievements",
      path: "/achievements",
      icon: (
        <Trophy
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (
        <Phone
          size={16}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      ),
    },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown(0, 0.5)}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background shadow-md py-3"
          : "bg-background/95 shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex flex-col cursor-pointer flex-shrink-0"
              variants={fadeIn(0.1, 0.5)}
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-14 md:h-16 w-auto object-contain"
                width="160"
                height="64"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-6"
            variants={fadeIn(0.2, 0.5)}
          >
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <span
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-all cursor-pointer hover:text-primary px-3 py-2 rounded-md group",
                    location === link.path
                      ? "text-primary bg-muted"
                      : "text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-foreground hover:text-primary focus:outline-none group p-2"
                  aria-label="Toggle menu"
                >
                  <Menu
                    size={24}
                    className="text-foreground group-hover:text-primary transition-colors"
                  />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <img src={logo} alt="Om Vinayaga Logo" className="h-8 w-auto" />
                    <span className="sr-only">Mobile Navigation Protocol</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 mt-6">
                  {navLinks.map((link, index) => (
                    <Link key={link.path} to={link.path}>
                      <span
                        className={cn(
                          "text-base flex items-center gap-3 py-3 px-4 rounded-md font-medium transition-colors cursor-pointer hover:bg-muted hover:text-primary group",
                          location === link.path
                            ? "bg-muted text-primary"
                            : "text-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.icon}
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
