<template>
    <div class="sub-wrap sub-info">
        <div class="outer yosemite">
            <div class="dot red" @click="$emit('close')"></div>
            <div class="dot amber"></div>
            <div class="dot green"></div>
        </div>
        <div class="content">
            <h2>Info</h2>
            <h3>김동현</h3>
            <h4>1994년(남)</h4>
            <dl>
                <dt>Email</dt>
                <dd>jfkdls0620@gmail.com</dd>
            </dl>
            <dl>
                <dt>Phone</dt>
                <dd>
                    <button type="button" class="btn-phone" @click="toggleButton()" v-if="!isCkd">View Phone number</button>
                    <p v-if="isCkd">{{pwd}}</p>
                </dd>
            </dl>
            <div class="number-area" v-if="isNumberPad">
                <input
                        type="password"
                        class="form-control"
                        v-model="value"
                        id="txtBox"
                        placeholder="Press any button"
                />
                <button class="btn-apply" @click="pwCkd()">확인</button>
            </div>
        </div>
        <div class="bottom-bar">
            <router-link to="/"></router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Info",
        data(){
            return{
                value : '',
                isNumberPad : false,
                isCkd : false,
                pwd : ''
            }
        },
        methods:{
            toggleButton(){
                this.isNumberPad ? this.isNumberPad = false : this.isNumberPad = true;
            },
            pwCkd(){
                if(this.value === localStorage.getItem('portfolio_pwd')){
                    this.isCkd = true;
                    this.pwd = '010-5032-7267'
                    this.isNumberPad = false
                }else{
                    alert('비밀번호가 틀립니다.')
                }

                this.value = '';
            }
        }
    }
</script>

<style scoped>

</style>
