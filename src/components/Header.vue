<template>

   <div  class="content">
       <div class="row">
           
           <div  class="navbar navbar-expand-sm col-md-12 bg-light" id="nav" >
               
               <ul class="navbar-nav col-md-10 left-item">
                   <router-link :to="{name:'index'}"><img class="home" src="@/assets/img/vomit.png"></router-link>
                    <li class="nav-item"><a class="nav-link" href="">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="">불편함</a></li>
                    <li class="nav-item"><a class="nav-link" href="">이번달 불편함</a></li>
               </ul>
               <ul v-if="!this.$store.state.loginState" class="navbar-nav col-md-3 login-true">                   
                   <li class="nav-item right-item"><router-link class="nav-link" :to="{name:'signup'}">회원가입</router-link></li>
                   <li class="nav-item right-item"><router-link class="nav-link" :to="{name:'login'}">로그인</router-link></li>
               </ul>

               <ul v-else-if="this.$store.state.loginState" class="navbar-nav col-md-2">
                                      
                   <li class="nav-item right-item">
                        <b-dropdown size="sm"  id="dropdown-1" class="m-2" variant="light" >
                            <div slot="button-content">
                                <img class="user-icon" src="@/assets/img/user.jpg" width="94" />
                                <p class="user-name">김진혁</p>
                            </div>
                            <b-dropdown-item varient="dark"><router-link class="nav-link" :to="{name:'mypage',params:{pk:'1'}}">마에페이지</router-link></b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item><p class="bg-light text-dark logout-btn" v-b-modal.modal-1>로그아웃</p></b-dropdown-item>
                            <b-dropdown-item>회원 탈퇴</b-dropdown-item>
                        </b-dropdown>
                   </li>
                   <!-- <li class="nav-item right-item"><router-link class="nav-link" :to="{name:'login'}"></router-link></li> -->
                    <!-- <li style="marginTop:5px;" class="nav-item right-item"><b-button class="bg-light text-dark logout-btn" v-b-modal.modal-1>로그아웃</b-button></li>              -->
                   <!-- <li class="nav-item right-item"><router-link class="nav-link" :to="{name:'login'}">로그아웃</router-link></li>
                   <li class="nav-item right-item"><router-link class="nav-link" :to="{name:'login'}">로그아웃</router-link></li> -->
               </ul>
           </div>
       </div>

<!-- <section>
    <b-dropdown>
        <figure slot="trigger">
            <img src="https://buefy.github.io/static/img/buefy.027baee.png" width="94" />
        </figure>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>

    <b-dropdown>
        <button class="button" slot="trigger">
            <b-icon icon="more_vert"></b-icon>
        </button>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>

    <b-dropdown>
        <h1 class="title" slot="trigger">
            Click me!
        </h1>

        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>
</section> -->




 
  


    <!-- Modal -->
    <div>
        <b-modal  @ok="logout" id="modal-1" title="로그아웃">
            <p class="my-1">정말로 로그아웃 하시겠습니까?</p>
        </b-modal>
    </div>
    <!-- Modal -->

   </div>
   
</template>



<script>
 
export default {
    methods:{
        modal(){
      
          
           // $("#exampleModal").modal('show');
            
        },
        logout(){
            this.$http.post('/api/logout')
            .then(()=>{
                this.$store.dispatch('changeLoginState',{res:'fail'});
                 this.$router.push('/');
            });

        }
    }
    
   
     
}
</script>
<style  scoped>
   
    .left-item{
        margin-left: 30px;
        
    }
    #nav{
       
        background-color: #fefeff;
        box-shadow: 1px 1px 1px 1px rgb(243, 243, 245);
        padding:0px;
       
    }
    
    a{
        text-decoration: none;
        font-size: 19px;
        color:black !important;
    }
  
    img.home{
        width:130px;
        height:25px;
        margin-top:5px;
        margin-left:10px;
        cursor: pointer;
    }
    #dropdown-1{
        background-color: aliceblue
    }
    
    li{
        margin-right: 20px;
    }
    li.left-item{
        margin-left:20px;
    }
    li.right-item{
        margin-right:10px;
    }
    li.right-item>a{
        
        color:gray !important;
        font-weight: 400 !important;
    }
    img.user-icon{
        height:35px;
        width:35px;
        border-radius: 50%; 
        cursor: pointer;
    }
    .logout-btn{
        margin: 0 10px 0 10px;
    }
    /* d-dropdown{
        width: 100px;
    } */
    p.user-name{
        font-weight: 700;
        
    }
    b-text{
        margin-left:0;
    }
    .login-true{
        padding:26px;
    }
    
</style>
