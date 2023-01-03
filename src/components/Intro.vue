<template>
    <div class="intro-container">
        <div class="intro-box">
            <div class="intro-box_inner">
                <div class="profile-img"></div>
                <h1>김동현의 Portfolio</h1>
                <div class="input-box">
                    <transition name="slide">
                        <input
                            type="password"
                            v-model="value"
                            placeholder="Your Password"
                            autocomplete="off"
                            @input="inputChange()"
                            @keyup.enter="onSubmit()"
                        />
                    </transition>
                    <transition name="fade2">
                        <button class="submit-btn" v-if="isPwd" @click="onSubmit(value)"></button>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Intro",
        data(){
            return{
                isPwd : false,
                value: '',
            }
        },
        methods:{
            inputChange(){
                this.value ? this.isPwd = true : this.isPwd = false;
            },
            onSubmit(){
                if(!this.value){
                    alert("패스워드를 입력해주세요.");
                }else{
                    localStorage.setItem('portfolio_pwd', this.value)
                    this.$router.replace('/main')
                }
            }
        },
        created() {
            if(localStorage.getItem('portfolio_pwd')){
                this.$router.replace('/main')
            }
        }
    }
</script>

<style scoped>

</style>