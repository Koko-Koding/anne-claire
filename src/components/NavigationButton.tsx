"use client";

interface NavigationButtonProps {
  id: string;
  label: string;
}

export const NavigationButton = ({ id, label }: NavigationButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
    >
      {label}
    </button>
  );
};