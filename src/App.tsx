function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center min-h-scree">
      <div className="w-96 h-96 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-6 h-full flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
          </div>
          <div className="flex-1 mb-4">
            <p className="text-gray-600 leading-relaxed">
              This is the main content area of the card. You can add any content
              here such as text, images, or other components.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Action Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
