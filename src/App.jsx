import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso" element={<CoursePage />} />
        <Route path="/modulo/:moduleId" element={<ModulePage />} />
        <Route path="/aula/:lessonId" element={<LessonPage />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </MainLayout>
  );
}
