<template>
    <div>
        <h1>상태 내용</h1>
    </div>
</template>

<script>
export default {
    created : function(){
        var id = this.$route.params.id;
        this.$http.get(`/${id}`)
        .then((response) => {
            this.movie = response.data;
        });
    },
    data : function(){
        return {
            movie : {}
        }
    }
}
</script>