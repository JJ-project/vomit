<template>
    <div class="container">
        <div class="login-form pagination">
            <div class="col-md-7 col-md-offset-7  col-sm-8 col-sm-offset-8">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="panel-title display-4 font-weight-bold text-left">
                            로그인
                            
                        </div>
                        <p v-if="res">아이디/이메일 또는 비밀번호가 회원정보와 일치하지 않습니다.</p>
                        
                    </div>
                    <div class="panel-body">
                        <div>
                            <input @keyup.enter="login" v-model="loginInfo.id" type="text" class="form-control" name="username" placeholder="아이디 또는 이메일" autofocus>
                        </div>
                        <div>
                            <input @keyup.enter="login" v-model="loginInfo.pw" type="password" class="form-control" name="password" placeholder="비밀번호">
                        </div>
                        <div>
                            <button @click="login" class="font-weight-bold form-control btn btn-warning">로그인</button>
                        </div>
                        <div>
                            <router-link tag="a" :to="{name:'signup'}"><button type="button" class="font-weight-bold form-control btn-link ">회원가입</button></router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            loginInfo:{
                id:"",
                pw:""  
            },
            res:false
        }
    },
    methods:{
        login(){
            this.$http.post('/api/login',{loginInfo:this.loginInfo})
            .then((res)=>{
                if(res.data==="success"){
                    this.res=false;
                    this.$store.dispatch("changeLoginState",{res:"success"});
                    this.$router.push('/');
                }
                else if(res.data==="fail"){
                    this.res=!false;
                    this.$store.dispatch("changeLoginState",{res:"fail"});
                

                }

                
            });
        }

    }
    
}
</script>

<style scoped>
    .login-form{
       margin-top:10%;

    }
    input{
        height:60px;
        margin-bottom:15px;
        font-size: 20px;
    }
    .pagination{
        justify-content: center;
    }
    button.btn-warning{
        height:60px;
        color: white;
        font-size: 20px;
        margin-bottom:10px;
    }
    button.btn-warning:focus{
        background-color: rgb(220, 185, 5);
        
    }
    button.btn-link{
        height:60px;
        font-size: 20px;
        color: gray;
        text-decoration: none;
    }
    button.btn-link:focus{
        background-color: aliceblue;
    }
    p{
        color: red;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }

</style>