<template>
    <div class="sub-wrap">
        <div class="outer yosemite">
            <div class="dot red" @click="$emit('close')"></div>
            <div class="dot amber"></div>
            <div class="dot green"></div>
        </div>
        <div class="content">
            <h2>Career</h2>
            <ul>
                <li class="career-list" v-for="item in data.items" :key="item.name" :class="item.class">
                    <router-link :to=item.class>
                        <div class="career-list-inner">
                            <div>
                                <h3>{{item.title}}</h3>
                                <p class="dates">{{ item.dates }}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data(){
            return{
                data: {
                    items: [
                        {
                            title: '홀세일닥터 ',
                            subtitle: '개발팀 사원',
                            dates: '2020. 03 ~ 2020. 12',
                            project: '웹디자인 유지보수',
                            work : '웹디자인 , 포토샵, 일러스트레이터, 플래쉬',
                            class:'whole'
                        },
                        {
                            title: '용산집 ',
                            subtitle: '개발팀 사원',
                            dates: '2019. 06 ~ 2020. 02',
                            project: '웹디자인 유지보수',
                            work : '웹디자인 , 포토샵, 일러스트레이터, 플래쉬',
                            class: 'ysz'
                        },
                        {
                            title: '웹비즈',
                            subtitle: '디자인 사원(연구원)',
                            dates: '2017. 09 ~ 2019. 05',
                            project: '웹표준 및 반응형, 모바일 웹 앱 퍼블리싱작업, 건강보험공단 똑똑 건강 앱 퍼블리싱',
                            work : 'HTML5, CSS3, CSS, Jquery',
                            class : 'webbizz',
                        },
                        {
                            title: '루브 ',
                            subtitle: '개발팀 사원',
                            dates: '2013. 07 ~ 2014. 10',
                            project: 'DDP(동대문 디자인 플라자)',
                            work : 'HTML5, CSS3, CSS, Jquery',
                            class : 'luve',
                        },
                        {
                            title: '이와이드플러스',
                            subtitle: '디자인 사원(연구원)',
                            dates: '2012. 09 ~ 2013. 06',
                            project: '웹디자인 유지보수',
                            work : '포토샵, 일러스트레이터',
                            class : 'ew',
                        },
                    ],
                }
            }
        }
    }
</script>

<style scoped>

</style>
