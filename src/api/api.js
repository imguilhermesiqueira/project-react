import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjEzOWQ2YzM3MmQ0MDA5ODM4NDc1NjMwMGQ2NzkyZCIsInN1YiI6IjY1ZTQ3YzBiYzk5ODI2MDE3YjYzOWM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dGk2VsarjVf5ML1ObR03FeNhBZtI2ob-K8qBPPJDmA8'
  }
});

export default api;