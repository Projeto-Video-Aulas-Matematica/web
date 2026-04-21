const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export async function getCourses() {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error('Erro ao buscar cursos');
  }
  return response.json();
}

export async function getModules(courseId) {
  const response = await fetch(`${API_URL}/courses/${courseId}/modules`);
  if (!response.ok) {
    throw new Error('Erro ao buscar módulos');
  }
  return response.json();
}

export async function getLesson(lessonId) {
  const response = await fetch(`${API_URL}/lessons/${lessonId}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar aula');
  }
  return response.json();
}
