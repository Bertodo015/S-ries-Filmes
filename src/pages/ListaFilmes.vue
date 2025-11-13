<script setup>
import Menu from '@/components/Menu.vue'
import axios from 'axios';
import { onBeforeMount, reactive } from 'vue';

const state = reactive({
  filmes: [],
  erro: ''
})

//https://github.com/Bertodo015/TVShow/blob/main/js/views/TVShowView.js
//const URL_API = 'https://www.tvmaze.com/api#show-search'
const URL_API = 'mongodb+srv://bertolomeu:BERTSI26@cluster0.frldmhm.mongodb.net/?appName=Cluster0'

onBeforeMount(() => {
  axios.get(URL_API + '/filmes')
  .then((resposta) => {
    state.filmes = resposta.data
  })
  .catch((erro) => {
    console.log('Erro no GET API/filmes')
  })
})
</script>

<template>
  <div class="d-flex">
    <Menu></Menu>
    <v-card title class="flex-1-1">
      <h1>Página de filmes</h1>
      <v-table height="580px" fixed-header striped="even">
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              Lançamento
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in state.filmes" :key="item.name">
            <td>{{ item.nome }}</td>
            <td>{{ item.lancamento }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

  </div>
</template>