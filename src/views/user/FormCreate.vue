<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Detail Users</h1>
            </div>

            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
            </form>
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
          fetch("http://jsonplaceholder.typicode.com/users"
            {
                headers: {
                    'content-type' : 'application/json; charset=UTF-8',
                },
                method: 'POST',
                body: JSON.stringify(this.user);

            }
          })
        }
      },
      mounted() {
          this.getDetailUser(this.id);
      }
    }
</script>