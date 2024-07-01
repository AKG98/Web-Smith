import Navbar from "./components/Navbar"
import ThemeProvider from "./contexts/ThemeProvider"
import EditorProvider from "./contexts/EditorProvider"
import useDetectMobile from "./features/useDetectMobile"

export default function App() {
  useDetectMobile();
  return (
    <ThemeProvider>
      <EditorProvider>
        <Navbar/>
      </EditorProvider>
    </ThemeProvider>
  )
}
