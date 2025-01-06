export default function ({ children }) {
    return (
      <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
        {children}
      </button>
    );
  }
