<template>
    <div>
        <ul class="company-ul company-ul-web">
            <li v-for="item in data.items" :key="item.name">
                <a :href="item.src" :class="item.class" target="_blank"></a>
                <dl>
                    <dt>{{item.title}}</dt>
                    <dd>{{item.text}}</dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "webbizz",
        data(){
            return{
                data: {
                    items: [
                        {
                            title: '친절한 인선생',
                            text : 'PC 메인 퍼블리싱 작업',
                            src:'https://www.teacherin.co.kr/',
                            class:'img01'
                        },
                        {
                            title: '코베리',
                            text : '반응형 메인 및 상세페이지 퍼블리싱작업',
                            src:'http://kovery.com/kor/main/main.php',
                            class:'img02'
                        },
                        {
                            title: '뉴페이스',
                            text : '메인 퍼블리싱작업',
                            src:'https://www.newfacemall.com/2018/main/main.asp',
                            class:'img03'
                        },
                        {
                            title: '이베이옥션',
                            text : '반응형 메인 및 상세페이지 퍼블리싱작업',
                            src:'http://ebay.auction.co.kr/',
                            class:'img04'
                        },
                        {
                            title: '심리상담센터 공감',
                            text : '반응형 메인 및 상세페이지 퍼블리싱작업',
                            src:'http://xn--e-0y5etx.kr/new/main/main.php',
                            class:'img05'
                        },
                        {
                            title: '웅진책방',
                            text : '반응형 메인 및 상세페이지 퍼블리싱작업',
                            src:'https://www.woongjinbooks.com/pc/index/index',
                            class:'img06'
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
