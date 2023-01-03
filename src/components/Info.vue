<template>
    <div class="flex-box">
        <div class="sub-wrap sub-info">
        <div class="outer yosemite">
            <div class="dot red" @click="$emit('close')"></div>
            <div class="dot amber"></div>
            <div class="dot green"></div>
        </div>
        <div class="content">
            <h2>INFO</h2>
            <div class="profile-img">
                <img src="../assets/profile.gif" alt="프로필">
            </div>
            <dl class="text-name">
                <dt>김동현</dt>
                <dd>jfkdls0620@gmail.com</dd>
            </dl>
            <ul>
                <li v-for="item in data.items"
                    :key="item.title"
                    :class="{'arrow': item.isTarget, 'arrow-remove' : this.isChk}"
                    @click="openPwd(item)">
                    {{item.title}}
                    <span v-if="!this.isChk">{{item.text}}</span>
                    <span v-else>{{item.subText}}</span>
                </li>
            </ul>
            <div class="number-area" v-if="isNumberPad">
                <div class="number-area_inner">
                    <p>비밀번호 입력</p>
                    <input
                            type="password"
                            class="form-control"
                            v-model="value"
                            id="txtBox"
                            placeholder="Your Password"
                            @keyup.enter="onSubmit()"
                    />
                    <div class="btn-area">
                        <button class="btn-apply" v-bind:disabled="this.value.length < 1" @click="onSubmit()">확인</button>
                        <button class="btn-apply" @click="onCancel()">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-bar">
            <a href="javascript:;" @click="$emit('close')"></a>
        </div>
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
                isChk: false,
                data: {
                    items: [
                        {
                            title: '핸드폰 번호',
                            text: '',
                            subText:'010-5032-7267',
                            isTarget: true
                        },
                        {
                            title: '생년월일',
                            text: '1994.06.20',
                            subText: '1994.06.20',
                        },
                        {
                            title: '지역',
                            text: '서울특별시 중구 신당동',
                            subText: '서울특별시 중구 신당동',
                        },
                        {
                            title: 'Instagram',
                            text: '@dh0620',
                            subText: '@dh0620',
                        }
                    ]
                }
            }
        },
        methods:{
            openPwd(item){
                if(!this.isChk){
                    if(item.title === '핸드폰 번호'){
                        this.isNumberPad = true;
                    }
                }
            },
            onSubmit(){
                if(this.value === localStorage.getItem('portfolio_pwd')){
                    this.isChk = true;
                    this.isNumberPad = false;
                }else{
                    alert('비밀번호가 틀립니다.');
                }
                this.value = '';
            },
            onCancel(){
                this.isNumberPad = false;
                this.value = '';
            }
        },

    }
</script>

<style scoped>

</style>
