import "./index.css";

export function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* 上半部分 - 灰色背景，白色文字 */}
      <div className="bg-gray-800 flex-1 flex items-center justify-center">
        <span className="text-white text-[clamp(5rem,20vw,20rem)] font-bold leading-none">
          Harry
        </span>
      </div>
      
      {/* 下半部分 - 白色背景 */}
      <div className="bg-white flex-1"></div>
    </div>
  );
}

export default App;
