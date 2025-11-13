<template>
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item prepend-avatar="../assets/avatar.png" title="Aderbal da Silva Sauro"
          subtitle="aderbal@email.com"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Meu perfil"
          value="perfil"
          to="/perfil"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-list-box-outline"
          title="Listar Filmes"
          value="listaFilmes"
          to="/filmes"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-plus"
          title="Cadastrar Filmes"
          value="cadastrarFilmes"
          to="/cadastrar"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Sair"
          value="sair"
          @click="deslogar"
        ></v-list-item>
      </v-list>

    </v-navigation-drawer>
  </v-layout>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const deslogar = () => {
    localStorage.usuarioLogado = false;
    localStorage.email = '';
    router.push('/')
  } 
</script>