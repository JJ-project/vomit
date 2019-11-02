
<template>
    <div class="content">
        <div class="row">
            <div class="col-md-12 main ">
                <div class="col-md-6  left-content " >
                    <h1 class="user_name">{{user.name}}</h1>
                    <div style="display:flex;flex-direction:row;" class="col-md-12">
                        <div style="display:flex;flex-direction:column;" class="post-info col-md-4 ">
                            <h1 class="">{{user.postNum}}</h1>
                            <h4>게시글</h4>
                        </div>
                        <div style="display:flex;flex-direction:column;" class="follower col-md-4 ">
                            <h1 class="">{{user.followerNum}}</h1>
                            <h4>팔로워</h4>
                        </div>
                        <div style="display:flex;flex-direction:column;" class="following col-md-4">
                            <h1  class="">{{user.followingNum}}</h1>
                            <h4>팔로잉</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4  right-content "  >
                    <div class="col-md-12 " style="display:flex;flex-direction:column;justify-content: center;align-items: center;">
                        <img class="user-icon" src="@/assets/img/user.jpg" width="94" />
                        <button type="button" class="col-md-5 btn btn-primary" style="margin-top:10px">프로필 사진 변경</button>
                    </div>
                </div>             
            </div>

            <div class="col-md-12 sub bg-ligh">               
                    <b-tabs content-class="mt-4 " style="background-color:#F6F7F8">
                        <b-tab class="text-dark bg-ligh" title="게시글" active>
                            <div class="my-post-page col-md-7 d-flex flex-column">
                            
                            <post-form/>
                            <post-form/>
                            <post-form/>
                            <post-form/>
                            <post-form/>
                            
                               
                            </div>
                        </b-tab>
                        <b-tab class="text-dark" title="좋아요"><p>I'm the second tab</p></b-tab>
                        <b-tab class="text-dark" title="팔로워"><p>I'm a disabled tab!</p></b-tab>
                        <b-tab class="text-dark" title="팔로잉"><p>I'm a disabled tab!</p></b-tab>
                    </b-tabs>
            </div>




        </div>
        
    </div>
</template>

<script>
import {PostForm} from '@/components'

    export default{

         components:{
            'post-form':PostForm,

        },

        create(){
            this.$http.posr('api/testPostJson')
            .then((res)=>{
                this.post=res.data;
                


            });
        },

       
        data(){
            return{
                user:{
                    name:"김진혁",
                    icon:"",
                    postNum:0,
                    followerNum:0,
                    followingNum:0, 
                },
                post:[

                ],
                like:{

                },
                follower:{

                },
                following:{

                }


            }
            

        }

        
    }
</script>

<style scoped>
    .main{
        margin: 50px auto;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-justify-content: center;
        align-items: center; 
        height:50vh;
    }
    .left-content{
        /* margin: 0 auto; */


    }
    .right-content{
        /* margin: 0 auto; */
        display: felx;
        flex-direction: column;
    }
    .user_name{
        font-size: 40px;
        color:rgb(95, 95, 93);
        padding-bottom:50px;
        padding-left: 20px;
        
    }
    img.user-icon{
        height:160px;
        width:160px;
        border-radius: 50%; 
        cursor: pointer;
    }
    img.icon{
        height:45px;
        width:45px;
        border-radius: 50%; 
        cursor: pointer;
    }
    .follower>h1{
        font-size: 50px;
        font-weight: 100;
        /* color:rgba(55, 55, 228, 0.849); */
    }
    .follower>h4{
        font-size: 25px;
        font-weight: 100;
    }
    .following>h1{
        font-size: 50px;
        font-weight: 100;
        /* color:rgba(55, 55, 228, 0.849); */
    }
    .following>h4{
        font-size: 25px;
        font-weight: 100;
    }
    .post-info>h1{
        font-size: 50px;
        font-weight: 100;
        /* color:rgba(55, 55, 228, 0.849); */
    }
    .post-info>h4{
        font-size: 25px;
        font-weight: 100;
    }
 

 
    h1,h2{
        color:rgb(95, 95, 93);

    }
    .my-post-page{
        height:auto;
        margin:0 auto;
        
    }
    .post{
        background-color: white;  
        height:130px;
        margin-bottom:20px;
    }
    .post-left{
        border-left:solid 10px rgb(16, 189, 212);
        border-right:solid 0.07px rgba(211, 211, 211, 0.226);
    }
    .post-center{
        width:630px;
        border-right:solid 1.2px rgba(211, 211, 211, 0.226);
    }
    
    
    .post-content{
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        line-height: 1.2;
        height: 50%;
        text-align: left;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        padding: 0;
    }
    p{
        color:rgb(95, 95, 93);
    }
    table,tr,td{
        /* border:solid 1px black; */
    }
    table{
        margin-top: 10px;
    }
    h6{
        color:rgba(95, 95, 93, 0.685);
    }
    a{
        color: black;
    }
    .sub{
        background-color: rgb(246, 247, 248);
        height: 50vh;
 
    }
 

</style>