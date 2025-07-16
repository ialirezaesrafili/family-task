import { useTheme } from '../../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-xl font-bold mb-2">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
