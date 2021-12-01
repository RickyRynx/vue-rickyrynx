<template>
    <layout-main>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Users</h1>
        </div>
        <div class="row">
        <div v-for="user in dataUsers" :key="users" class="card col-md-3 mx-2 my-2">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">
                Company : {{ user.company.name }}
                {{ user.address }}
            </p>
            <router-link :to="{name:'detailuser', params: {id: user.id, username: user.username}}" class="btn btn-primary">Detail Users</a>
        </div>
        </div>
        </div>
    </layout-main>
</template>

<script>
    import LayoutMain from "@/views/LayoutMain"
    export default {
      components: {
        LayoutMain
      },
      data() {
          return {
              datausers: null,
          }
      },
      methods: {
        loadUsers(){
          fetch("http://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(json => {
              this.datausers = json;
          })
            .catch(error => {
                console.log(error);
            })
        }
      },
      mounted() {
          this.loadUsers();
      }
    }
</script>
