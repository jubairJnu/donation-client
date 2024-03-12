import MainLayout from "./pages/component/layOut/MainLayout";
import { currentTheme } from "./redux/features/theme/themeSlice";
import { useAppSelector } from "./redux/hooks/Hooks";

function App() {
  const isDark = useAppSelector(currentTheme);

  return (
    <div className={`${isDark ? "bg-black text-white " : ""}`}>
      <MainLayout />
    </div>
  );
}

export default App;
