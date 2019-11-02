<template>
    <div>
        <Header></Header>
        
    </div> 
</template>

<script>
import {Header} from '@/components';


export default {
    created(){
        this.$http.post('/api/session')
        .then((res)=>{
            if(res.data==="fail"){
                this.session=false;
                this.$store.dispatch('changeLoginState',{res:'fail'});
            }
            else if(res.data==="success"){
                this.session=true;
                this.$store.dispatch('changeLoginState',{res:'success'});
            }
        });
    },
    components:{
        Header
    },
    data(){
        return {
        }
    },
    methods:{
        
    }   
}
</script>
