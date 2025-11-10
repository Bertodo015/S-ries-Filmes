<script setup>
import Menu from '@/components/Menu.vue'
import axios from 'axios';
import { onBeforeMount, reactive } from 'vue';

const state = reactive({
  produtos: [],
  erro: ''
})

//https://github.com/Bertodo015/TVShow/blob/main/js/views/TVShowView.js
const URL_API = 'https://www.tvmaze.com/api#show-search'

onBeforeMount(() => {
  axios.get(URL_API + '/produtos')
  .then((resposta) => {
    state.produtos = resposta.data
  })
  .catch((erro) => {
    console.log('Erro no GET API/produtos')
  })
})
</script>

<template>
  <div class="d-flex">
    <Menu></Menu>
    <v-card title class="flex-1-1">
      <h1>Página de produtos</h1>
      <v-table height="580px" fixed-header striped="even">
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              Preço
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in state.produtos" :key="item.name">
            <td>{{ item.nome }}</td>
            <td>{{ item.preco }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

  </div>
</template>