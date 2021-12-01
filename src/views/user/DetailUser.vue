<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Detail Users</h1>
            <div>
            <div>
            <div class="card">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{datausers?.username}}/h5>
                    <address class="card-text">
                    <b>{{datausers?.username}}</b><br/>
                    {{datausers?.address?.street}}, {{datausers?.address?.suite}}<br/>
                    {{datausers?.address?.city}}, {{datausers?.address?.zipcode}}<br/>
                    {{datausers?.phone}}<br/>
                    {{datausers?.website}}<br/>
                    {{datausers?.email}}<br/>
                    <b>{{datausers?.company?.name}}</b>
                    {{datausers?.company?.catchPhrase}}<br/>
                    </address>
            </div>
            </div>
            </div>
        </layout-main>
     <div>   
</template>

<script>
    import LayoutMain from "@/view/LayoutMain";

    export default {
        components: {
            LayoutMain
        },
        data() {
            return {
                id : this.$route.params.id
                username: this.$route.params.username,
                datausers: null,
                errormessage: null,
            }
        },
        methods: {
        loadUsers(){
          fetch("http://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(json => {
              if(json.id !== underfined) {
                  this.datausers= json;
              }else {
                  this.errormessage = "Data Tidak Ditemukan!";
              }
          })
            .catch(error => {
                console.log(error);
                this.errormessage = "Maaf Tidak Dapat Memuat Data User, silahkan coba lagi!";
            })
        }
      },
      mounted() {
          this.getDetailUser(this.id);
      }
    }
</script>