export default function ({ children }) {
  return (
    <button class="px-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
      {children}
    </button>
  );
}
