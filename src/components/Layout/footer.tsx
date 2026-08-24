"use client";

const Footer = () => {
  return (
    <footer className="shrink-0 border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-foreground">Lekan Okelola</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
