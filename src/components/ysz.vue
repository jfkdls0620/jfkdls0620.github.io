<template>
    <div>
        <ul class="company-ul company-ul-ysz">
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
        name: "ysz",
        data(){
            return{
                data: {
                    items: [
                        {
                            title: '용산집 사이트 리뉴얼',
                            text : 'vueJs를 사용한 반응형 웹 개발',
                            src:'https://yongsanzip.com/',
                            class:'img01'
                        },
                        {
                            title: '니은기억',
                            text : 'javascript를 이용한 액자제작 적응형 페이지 개발',
                            src:'https://www.niunkiok.com/',
                            class:'img02'
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
