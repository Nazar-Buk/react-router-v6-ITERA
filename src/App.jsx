import { RouterProvider } from "react-router-dom";
import { router } from "../src/BasicExample/routing";

function App() {
  return <RouterProvider router={router} fallbackElement={<>Loading...</>} />; // fallbackElement -- буде показуватися поки не загрузяться дані
  // ось приклад, якщо дочірній роут не прогрузився то і батьківський не прогрузиться, щоб ми не дивилися на пустий екран треба використовувати fallbackElement
}

export default App;
