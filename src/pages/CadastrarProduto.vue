<script setup>
import Menu from '@/components/Menu.vue'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const nome = ref('')
const lancamento = ref(0)
//const URL_API = 'http://localhost:3000'
const URL_API = 'mongodb+srv://bertolomeu:BERTSI26@cluster0.frldmhm.mongodb.net/?appName=Cluster0'
const router = useRouter()

const cadastrarFilme = () => {
  const novoFilme = { nome: nome.value, lancamento: lancamento.value }
  
  axios.post(URL_API + '/filmes', novoFilme)
  .then((resposta) => {
    if(resposta.data) router.push('/filmes')
  })
  .catch((erro) => {
    console.log(erro)
  })
}

const nomeRegras = [
  value => {
    if (nome.value.length > 0) return true
    return 'O nome deve ter pelo menos 1 caractere.'
  }
]

</script>

<template>
  <div class="d-flex ga-0">
    <Menu></Menu>
    <v-card title>
      <h1>Página de cadastro de filmes</h1>
      <v-sheet class="mx-auto mt-16 px-2 py-3" width="1000px">
        <v-form @submit.prevent fast-fail>
          <v-text-field v-model="nome" type="text" label="Nome do filme" color="primary" :rules="nomeRegras"></v-text-field>

          <!--1888, pois foi a data do filme mais antigo do mundo-->
          <v-number-input v-model="lancamento" label="Ano de lançamento" color="primary" :min="1888" :max="2100"></v-number-input>

          <v-btn @click="cadastrarFilme" color="success">Cadastrar</v-btn>

        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>