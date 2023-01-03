<template>
        <div class="sub-wrap sub-wrap_career">
            <div class="outer yosemite" style="display: block">
                <div class="dot red" @click="$emit('close')"></div>
                <div class="dot amber"></div>
                <div class="dot green"></div>
            </div>
            <div class="content">
                <div class="content-inner">
                    <h2>{{itemData.title}}</h2>
                    <ul class="content-inner-list">
                        <li>
                            <dl class="content-inner-dl">
                                <dt>근무기간</dt>
                                <dd>{{itemData.dates}}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="content-inner-dl">
                                <dt>담당업무</dt>
                                <dd>{{itemData.project}}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="content-inner-dl">
                                <dt>주요직무</dt>
                                <dd>{{itemData.work}}</dd>
                            </dl>
                        </li>
                    </ul>

                </div>
                <YszComponents v-if="itemData.class === 'ysz'"/>
                <WebbizzComponents v-if="itemData.class === 'webbizz'"/>
            </div>
        </div>
</template>

<script>
    import YszComponents from '../components/ysz.vue'
    import WebbizzComponents from '../components/webbizz.vue'

    export default {
        name: "Career",
        data(){
          return{

          }
        },
        components:{
            YszComponents,
            WebbizzComponents
        },
        props:{
            itemData: Object
        }
    }
</script>

<style scoped>

</style>
