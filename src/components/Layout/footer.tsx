"use client";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border mt-auto">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-foreground font-medium">Lasmor</span>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
