<template>
    <div id="container">
        <div class="doc-wrap">
            <div class="doc-wrap-inner">
                <ul>
                    <!--          <li v-for="(item, index) in data.items" :key="item.name" ref="items" @mouseover="focus(item, data.items, index)" @mouseleave="icon(index)">-->
                    <li v-for="item in data.items" :key="item.name" ref="items">
                        <div @click="openModal(item)">
                            <div class="name">{{ item.name }}</div>
                            <img class="ico" :src="item.src" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="fade" appear>
            <ModalView v-if="isActive" @close="isActive=false"/>
        </transition>
        <transition name="fade" appear>
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
                            path: '/Company'
                        },
                        {
                            name: 'Career',
                            src: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png',
                            path: '/Company'
                        },
                    ],
                }
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
                }
            }
            // focus(item, items, idx){
            //   let el = this.$refs.items[idx];
            //
            //   let previous = this.$refs.items[idx - 1];
            //   let previous1 = this.$refs.items[idx - 2];
            //   let next = this.$refs.items[idx + 1];
            //   let next2 = this.$refs.items[idx + 2];
            //   console.log(next)
            //
            //   if (previous === -1) {
            //     console.log("first element");
            //     el.style.transform = "scale(1.5)  translateY(-10px)";
            //   } else if (idx + 1 === items.length) {
            //     el.style.transform = "scale(1.5)  translateY(-10px)";
            //     console.log("last element");
            //   } else {
            //     el.style.transform = "scale(1.5)  translateY(-10px)";
            //     previous.style.transform = "scale(1.2) translateY(-6px)";
            //     previous1.style.transform = "scale(1.1)";
            //     next.style.transform = "scale(1.2) translateY(-6px)";
            //     next2.style.transform = "scale(1.1)";
            //   }
            // },
            // icon(idx){
            //   const el = this.$refs.items[idx];
            //
            //   el.style.transform = "scale(1)"
            // }
        }
    }
</script>

<style scoped>

</style>
