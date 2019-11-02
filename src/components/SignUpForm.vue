<template>
    <div class="container">
        <div class="pagination">
            <div class="col-md-6 col-md-offset-6  col-sm-8 col-sm-offset-8">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="panel-title display-4 font-weight-bold text-left">
                            회원가입
                        </div>                        
                    </div>
                    <div class="panel-body">
                        <div>
                            <input @keydown.space.prevent @focus="handleFocusName" v-model="user.name" type="text" class="form-control" name="username" placeholder="이름" autofocus>
                            <p>{{errMsg.name}}</p>
                        </div>
                        
                        <div>
                            <div style="display:flex" class="align-self-center flexbox">
                                <input @keydown="handleKeyDown" @keydown.space.prevent  @focus="handleFocusId" v-model="user.id" type="text" class="col-md-10 form-control" name="userid" placeholder="아이디 (띄어쓰기 없이 영/숫자 6-10자)" autofocus>
                                <button @click="confirmID" class="conf-btn col-md-2">중복확인</button>
                            </div>
                  
                            <p :style='msgStyle'>{{errMsg.id}}</p>
                        </div>
                        
                        <div>
                            <input @focus="handleFocusPw" @blur="handleBlur" v-model="user.pw" type="password" class="form-control" name="password" placeholder="비밀번호 (6-15자 영문 대소문자, 숫자 맟 특수문자 조합)">
                            <p>{{errMsg.pw}}</p>
                        </div>

                        <div>
                            <input @focus="handleFocusPw2"  @blur="handleBlur" v-model="user.pw2" type="password" class="form-control" name="confirmpassword" placeholder="비밀번호 확인">
                            <p>{{errMsg.pw2}}</p>
                        </div>

                        <div>
                            <input @keydown.space.prevent @focus="handleFocusEmail" v-model="user.email" type="email" class="form-control" name="email" placeholder="이메일">
                            <p>{{errMsg.email}}</p>

                        </div>
                        
                        <div>
                            <button @click="submit" class="font-weight-bold form-control btn btn-complete">완료</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div>
            <b-modal hide-footer no-close-on-backdrop hide-header-close ref="modal1"  id="modal-1" title="회원가입 완료">
                <p class="my-1">성공적으로 회원가입이 완료 되었습니다.</p>
                <b-btn @click="okBtn" class="float-right bg-primary">OK</b-btn>
            </b-modal>
        </div>
    </div>

    

</template>

<script>

    const errMsgStyle={"color":"red","margin-top":"-10px","margin-bottom": "10px"};
    const successMsgStyle={"color":"green","margin-top":"-10px","margin-bottom": "10px"};
    var korCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var emailCheck = /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/;
    var engKorCheck = /^[A-Za-zㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
    var engNumSpcCheck=/^[A-Za-z0-9~!@#$%^&*()_+|<>?:{}+]*$/;

    export default{

        data(){
            return{                
                user:{
                    name:"",
                    id:"",
                    pw:"",
                    pw2:"",
                    email:""
                },
                confirmPW:false,
                confirmId:false,
                errMsg:{
                    name:"",
                    id:"",
                    pw:"",
                    pw2:"",
                    email:""
                },
                msgStyle:{
                    "color": "red",
                    "margin-top":"-10px",
                    "margin-bottom": "10px"
                }
            }
        },
        methods:{
            okBtn(){
                this.$router.push('/');
            },
            handleBlur(){
               
                if(this.user.pw==="" || this.user.pw2===""){
                    this.errMsg.pw2="";
                }
                else if(this.user.pw!==""&&this.user.pw2!==""){
                    if(this.user.pw!==this.user.pw2){
                        this.errMsg.pw2="비밀번호가 일치하지 않습니다";
                    }
                    else if(this.user.pw===this.user.pw2){
                        this.errMsg.pw2="";
                    }
                }
            },
            beforeSubmit(){
                if(this.errMsg.pw2==="비밀번호가 일치하지 않습니다"){
                    return false;
                }
                else if(this.user.name===""){
                    
                    this.errMsg.name="이름을 입력하세요";
                    return false;
                }
                else if(!(this.user.name.length>1&&this.user.name.length<=15)||!engKorCheck.test(this.user.name)){
                    this.errMsg.name="이름은 최대 15자 이내로 한글/영문만 가능합니다";
                    return false;
                }
                else if(this.user.id===""){
                    this.confirmId=false;
                    this.errMsg.id="아이디를 입력하세요";
                    return false;
                }
                else if(!(this.user.id.length >= 6 && this.user.id.length <= 10)||korCheck.test(this.user.id)){
                    this.confirmId=false;
                    this.msgStyle=errMsgStyle;
                    this.errMsg.id="아이디 조합기준에 적합하지 않습니다";
                    return false;
                }
                else if(this.confirmId==false){
                    this.msgStyle=errMsgStyle;
                    this.errMsg.id="중복확인을 하셔야 합니다";
                    return false;
                }
                else if(this.user.pw===""){
                    this.errMsg.pw="패스워드를 입력하세요";
                    return false;
                }
                else if(!(this.user.pw.length>=6 && this.user.pw.length<=15)||korCheck.test(this.user.pw)||!engNumSpcCheck.test(this.user.pw)){
                    
                    this.errMsg.pw="패스워드 조합기준에 적합하지 않습니다";
                    return false;
                }
                else if(this.user.pw2===""){
                    
                    this.errMsg.pw2="패스워드를 확인하세요";
                    return false;
                }
                else if(this.user.email===""){
                    
                    this.errMsg.email="이메일을 입력하세요";
                    return false;
                }
                else if(this.confirmPW==true){
                    
                     this.errMsg.pw2="패스워드가 일치하지 않습니다";
                    return false;
                }
                else if(!emailCheck.test(this.user.email)){
                     this.errMsg.email="이메일 형식이 적절하지 않습니다";
                    return false;
                }
                else{
                    return true;
                }
            },
            submit(){
                if(this.beforeSubmit()){
                   this.$http.post('/api/register',{user:this.user})
                   .then((res)=>{
                       if(res.data==="success"){
                           this.$refs['modal1'].show();
                           //this.$router.push('/login');
                       }
                       else if(res.data==="fail"){
                           this.$router.push('/');
                       }
                       
                       
                       

                   }); 
                }
            },
            handleFocusName(){
                this.errMsg.name="";
            },
            handleFocusId(){
               this.errMsg.id="";
            },
            handleFocusPw(){
               this.errMsg.pw="";
            },
            handleFocusPw2(){
               this.errMsg.pw2="";
            },
            handleFocusEmail(){
               this.errMsg.email="";
            },
            handleKeyDown(){
                this.confirmId=false;
            },
            confirmID(){
                if(this.user.id==""){
                    this.errMsg.id="아이디를 입력하세요";
                    return;
                }
                else if(!(this.user.id.length >= 6 && this.user.id.length <= 10)){
                    this.msgStyle=errMsgStyle;
                    this.errMsg.id="아이디 조합기준에 적합하지 않습니다";
                    return false;
                }
                else if(korCheck.test(this.user.id)){
                    this.msgStyle=errMsgStyle;
                    this.errMsg.id="아이디 조합기준에 적합하지 않습니다";
                    return false;
                }
                else{ 
                   this.$http.post('/api/confID',{id:this.user.id})
                   .then((res)=>{
                       if(res.data=="success"){
                           this.confirmId=true;
                           this.msgStyle=successMsgStyle;
                           this.errMsg.id="사용 가능한 아이디 입니다";
                           
                        
                       }
                       else{
                           this.msgStyle=errMsgStyle;
                            this.errMsg.id="이미 사용 중인 아이디 입니다";
                       }
                       
                   }); 
                    
                }
            }
            

        }
    }
</script>


<style scoped>
@import url('https://unpkg.com/semantic-ui-css@2.2.9/semantic.css');

span.error {
  color: #9F3A38;
}
    .pagination{
        margin-top:5%;
        justify-content: center;
    }
    input{
        height:45px;
        margin-bottom:15px;
        font-size: 20px;
    }
    button.btn-complete{
        height:60px;
        color: white;
        font-size: 20px;
        margin-bottom:10px;
        background-color: rgb(32, 196, 195);
    }
    button.btn-complete:focus{
        opacity: 0.8;
    }
    p{
        color: red;
        margin-top:-10px;
        margin-bottom: 10px;
    }
    .panel-title{
        font-size: 30px;
        margin-bottom: 30px; 
    }
    button.conf-btn{
        height:45px;
        background-color: aliceblue;
        border-radius: 5px;
        margin-left: 1px;
        font-weight: 400;
        color:rgb(131, 128, 128);
        cursor: pointer;
        outline: none;
    }
    p.condition{
        color: black;
    }
    p.my-1{
        color: black;
    }
</style>