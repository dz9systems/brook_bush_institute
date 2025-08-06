import logoPath from "@assets/logo_1754440730074.png";

interface BrookbushLogoProps {
  className?: string;
}

export function BrookbushLogo({ className = "" }: BrookbushLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoPath} 
        alt="Brookbush Institute - Human Movement Science" 
        className="h-10 w-auto"
      />
    </div>
  );
}
