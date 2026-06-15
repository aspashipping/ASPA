import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ASPA Shipping Agency" className="h-6 w-auto object-contain" />
          <span className="text-xs font-medium text-muted-foreground">Shipping Agency Pvt. Ltd.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ASPA Shipping Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
