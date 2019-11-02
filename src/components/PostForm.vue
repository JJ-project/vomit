<template>
  <div class="post d-flex flex-row">
        <div class="post-left" style="display:flex;flex-direction:column;align-items:center;">
                <img class="icon m-2" src="@/assets/img/user.jpg"/>
                <p></p>
        </div>
        <div class="post-center col-md-9" >
            <h3 class="mt-2  text-truncate col-md-11" style="margin-left:-15px;">SPRi [2019년 프리랜서 근로환경 실태조사] 경품 100% 지급</h3>
            <router-link class="nav-link post-content" :to="{name:'login',params:{pk:'1'}}">
                        기간: 2019년 10월 24일(목) - 11월 12(화), 오후 6시

                        • 답례품: 응답 완료자 100% 스타벅스 아메리카노 상품권 2매

                            추천인으로 기입되는 개수만큼 검증 후 응답별 5,000원 지급

                        • 발표: 실태조사 종료 후 개별 연락을 통해 답례품 지급 예정

                        • 내용

                        

                        과학기술정보통신부 산하 소프트웨어정책연구소(SPRi)에서는 프리랜서 소프트웨어

                        개발자의 근로환경과 처우 개선을 위한 정책기획 및 수립을 위해 

                        ‘2019년 SW프리랜서 근로환경 실태조사’를 실시하고 있습니다.

                        

                        국내 프리랜서 소프트웨어 개발자분들의 실제 경험과 근무 여건을 파악하여

                        실질적으로 필요성 있는 정책을 수립할 수 있도록 많은 관심과 참여 부탁드립니다.

                        

                        프리랜서분들의 더 나은 업무환경을 위해 좋은 취지에 공감하시어 10분 정도만 

                        시간을 내주시면 감사하겠습니다.

                        

                        추천인의 메일로 지목되는 경우 검증을 거쳐 1개의 응답 별로 5,000원을 지급할

                        예정입니다. 주변의 프리랜서로 활동하고 계시는 지인들에게 많은 홍보바랍니다.
            </router-link>                            
        </div>
        <div class="post-right col-md-2" style="display:flex;flex-direction:column;align-items:center;padding:0;">
            <table>
                <tr>
                    <td style="width:30px;">
                        <img src="@/assets/img/comment.png" style="" width="22" height="22">
                    </td>
                    <td>
                        <h6 style="margin-top:3px">12</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="@/assets/img/good.png" width="22" height="22">
                    </td>
                    <td>
                        <h6 style="margin-top:5.5px">5</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="@/assets/img/eye.png" style="" width="22" height="22">
                    </td>
                    <td>
                        <h6 style="margin-top:5px">120</h6>
                    </td>
                </tr>                                          
                <tr>
                    <td>
                        <img src="@/assets/img/clock.png" width="22" height="22">
                    </td>
                    <td>
                        <h6 style="margin-top:5.5px">2019-11-01</h6>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
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
   
    table{
        margin-top: 10px;
    }
    h6{
        color:rgba(95, 95, 93, 0.685);
    }
    a{
        color: black;
    }
    img.icon{
        height:45px;
        width:45px;
        border-radius: 50%; 
        cursor: pointer;
    }


</style>