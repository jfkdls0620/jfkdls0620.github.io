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
                            @input="inputChange(value)"
                            @keyup.enter="onSubmit(value)"
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
            inputChange(val){
                val ? this.isPwd = true : this.isPwd = false;
            },
            onSubmit(val){
                console.log(this.$store.state.name);
                if(!val){
                    alert("패스워드를 입력해주세요.");
                }else{

                }
            }
        }
    }
</script>

<style scoped>

</style>