// components/Dropdown.tsx
import { useState } from "react";

interface DropdownItem {
  key: string;
  label: string;
  href: string;
  emoji?: string; // Add emoji support
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

const Dropdown = ({ label, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-800 hover:font-bold focus:outline-none"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-4 w-96 bg-white shadow-lg rounded-lg z-50">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block px-4 py-4 text-gray-800 hover:bg-gray-300"
            >
              {item.emoji && <span className="mr-2">{item.emoji}</span>}
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
