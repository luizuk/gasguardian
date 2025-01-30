import Logo from "./logo";

export function LogoText(): JSX.Element {
  return (
    <div className="flex items-center">
      <Logo size={44} />
      <p className="text-xl font-bold text-gray-800 ml-2">Lupa Labs</p>
    </div>
  );
}
