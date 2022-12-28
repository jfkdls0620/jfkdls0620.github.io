<template>
    <div id="container">
        <div class="doc-wrap">
            <div class="doc-wrap-inner">
                <ul>
                    <!--          <li v-for="(item, index) in data.items" :key="item.name" ref="items" @mouseover="focus(item, data.items, index)" @mouseleave="icon(index)">-->
                    <li v-for="item in data.items" :key="item.name" ref="items">
                        <div @click="openModal(item)">
                            <div class="name">{{ item.name }}</div>
                            <img v-if="!item.chk" class="ico" :src="item.src" alt="" @click="openLink(item)">
                            <img v-if="item.chk" src="../assets/images/insta_ico.png" alt="" @click="openLink(item)">
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
                            name: 'Instagram',
                            src: 'require(`@/assets/images/insta_ico.png`)',
                            path: 'https://www.instagram.com/dh0620/',
                            chk: 1,
                        },
                    ],
                },

            }
        },
        methods: {
            openModal(item){
                const screenWidth = screen.width;
                if(screenWidth >= 1024){ //pc
                    if(item.name === 'Career'){
                        this.isActive = true;
                        this.isInfo = false;
                    }else if(item.name === 'Info'){
                        this.isInfo = true;
                        this.isActive = false;
                    }
                }else{
                    if(item.name === 'Career'){
                        this.$router.push('/portfolio')
                    }else if(item.name === 'Info'){
                        this.$router.push('/Info')
                    }

                }

            },
            openLink(src){
                if(src.name === 'Instagram'){
                    const openWindow = window.open("about:blank");
                    openWindow.location.href = src.path;
                }
            },


        }
    }
</script>

<style scoped>

</style>
