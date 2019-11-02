import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        loginState:false
    },
    mutations:{
        loginSuccess(state){
            state.loginState=true;
        },
        loginFail(state){
            state.loginState=false;
        }
    },
    actions:{
        changeLoginState(context,payload){
            
            if(payload.res=="success"){
                context.commit('loginSuccess');
            }
            else{
                context.commit('loginFail');
            }   
        }
    }
});