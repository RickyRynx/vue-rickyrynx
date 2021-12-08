<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Detail Users</h1>
            </div>
            <div>
            <div v-if="datausers == null" class="alert alert-warning" role="alert">
                {{ errormessage }}
            </div>
            <div v-if="datausers != null" class="card">
            <img src="user.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ datausers?.name }}</h5>
                <address class="card-text">
                    <b>{{ datausers?.username }}</b><br/>
                    {{ datausers?.address?.street }}, {{ datausers?.address?.suite }}<br/>
                    {{ datausers?.address?.city }}, {{ datausers?.address?.zipcode }}<br/>
                    {{ datausers?.phone }}<br/>
                    {{ datausers?.website }}<br/>
                    {{ datausers?.email }}<br/><br/>
                    <b>{{ datausers?.company?.name }}</b><br/>
                    {{ datausers?.company?.catchPhrase }}
                </address>
            </div>
            </div>
            </div>
        </layout-main>
     </div>   
</template>

<script>
    import LayoutMain from "@/views/LayoutMain";

    export default {
        components: {
            LayoutMain
        },
        data() {
            return {
                id : this.$route.params.id,
                username: this.$route.params.username,
                datausers: null,
                errormessage: null,
            }
        },
        methods: {
        getDetailUsers(id){
          fetch("http://jsonplaceholder.typicode.com/users/" + id)
          .then(response => response.json())
          .then(json => {
              if(json?.id !== undefined){
                this.datausers = json;
              }else{
                this.errormessage = "Data User Tidak Ditemukan";
            }
          }) 
            .catch(error => {
                console.log(error);
                this.errormessage = "Maaf Tidak Dapat Memuat Data User,silahkan Coba Lagi";
            })
        }
      },
      mounted() {
          this.getDetailUsers(this.id);
      }
    }
</script>