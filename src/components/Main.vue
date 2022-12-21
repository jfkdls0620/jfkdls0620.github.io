<template>
    <div id="container">
        <div class="nav-bar">
            {{nowTime}}
        </div>
        <div class="doc-wrap">
            <div class="doc-wrap-inner">
                <ul>
                    <!--          <li v-for="(item, index) in data.items" :key="item.name" ref="items" @mouseover="focus(item, data.items, index)" @mouseleave="icon(index)">-->
                    <li v-for="item in data.items" :key="item.name" ref="items">
                        <div @click="openModal(item)">
                            <div class="name">{{ item.name }}</div>
                            <img class="ico" :src="item.src" alt="" @click="openLink(item)">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="fade">
            <ModalView v-if="isActive" @close="isActive=false"/>
        </transition>
        <transition name="fade">
            <ModalInfo v-if="isInfo" @close="isInfo=false"/>
        </transition>
    </div>
</template>

<script>
    import ModalView from './Portfolio.vue';
    import ModalInfo from './Info.vue';

    export default {
        name: "Main",
        components:{
            ModalView,
            ModalInfo
        },
        data() {
            return {
                isInfo : false,
                isActive: false,
                data: {
                    items: [
                        {
                            name: 'Info',
                            src: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png',
                            path: 'javascript:;'
                        },
                        {
                            name: 'Career',
                            src: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png',
                            path: 'javascript:;'
                        },
                        {
                            name: 'Instagram',
                            src: 'http://koreapenman.com/dev/insta_ico.png',
                            path: 'https://www.instagram.com/dh0620/'
                        },
                    ],
                },
                nowTime: "00:00:00"
            }
        },
        created() {
            this.nowTimes();
            this.setDate();
            setInterval(this.nowTimes.bind(this) , 1000);
        },
        methods: {
            openModal(item){
                if(item.name === 'Career'){
                    this.isActive = true;
                    this.isInfo = false;
                }else if(item.name === 'Info'){
                    this.isInfo = true;
                    this.isActive = false;
                }
            },
            openLink(src){
                if(src.name === 'Instagram'){
                    const openWindow = window.open("about:blank");
                    openWindow.location.href = src.path;
                }
            },
            setDate(){
                let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
                let mm =new Date().getMinutes() < 10? "0" + new Date().getMinutes(): new Date().getMinutes();
                let ss =new Date().getSeconds() < 10? "0" + new Date().getSeconds(): new Date().getSeconds();
                return {
                     'hh' : hh
                    , 'mm' : mm
                    , 'ss' : ss
                }
            },
            nowTimes() {
                this.nowTime = this.setDate().hh + ":" + this.setDate().mm + ":" + this.setDate().ss;
            }

        }
    }
</script>

<style scoped>

</style>
