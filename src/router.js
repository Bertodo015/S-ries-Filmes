import { createWebHistory, createRouter } from 'vue-router'
import PerfilView from './pages/Perfil.vue'
import LoginView from './pages/Login.vue'
import ListFilmesView from './pages/ListaFilmes.vue'
import CadastrarFilmesView from './pages/CadastrarProduto.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/perfil', component: PerfilView },
    { path: '/filmes', component: ListFilmesView },
    { path: '/cadastrar', component: CadastrarFilmesView }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router