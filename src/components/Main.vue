<template>
    <div id="container">
        <div class="doc-wrap">
            <div class="doc-wrap-inner">
                <ul>
                    <!--          <li v-for="(item, index) in data.items" :key="item.name" ref="items" @mouseover="focus(item, data.items, index)" @mouseleave="icon(index)">-->
                    <li v-for="item in data.items" :key="item.name" ref="items">
                        <div @click="openModal(item)">
                            <div class="name">{{ item.name }}</div>
                            <img class="ico" :src="item.src" alt="" />
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
    import instaIcon from '../assets/images/insta_ico.png';

    export default {
        name: "Main",
        components:{
            ModalView,
            ModalInfo,
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
                            name: 'Logout',
                            src: 'https://mhmdmhd6.github.io/Mac-OS-Desktop/icon/dock/preferences.png',
                            path: 'javascript:;',
                        },
                        {
                            name: 'Instagram',
                            src: instaIcon,
                            path: 'https://www.instagram.com/dh0620/',
                        },
                    ],
                },

            }
        },
        methods: {
            openModal(item){
                if(item.name === 'Career'){
                    this.isActive = true;
                    this.isInfo = false;
                }else if(item.name === 'Info'){
                    this.isInfo = true;
                    this.isActive = false;
                }else if(item.name === 'Instagram'){
                    const openWindow = window.open("about:blank");
                    openWindow.location.href = item.path;
                } else if (item.name === 'Logout') {
                    localStorage.clear();
                    this.$router.replace('/');
                }
            },
        }
    }
</script>

<style scoped>

</style>
