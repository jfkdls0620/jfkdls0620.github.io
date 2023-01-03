<template>
    <div class="loading-wrap">
        <div class="loading-wrap_inner">
            <h1 class="logo"><img src="../assets/Apple-White-Logo.png" alt="로고"></h1>
            <div class="progress-bar">
                <div class="progress-bar animation-bar" id="bar" ref="dataWidth"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        data(){
            return {
                progressbarHandler: null,
                countDownTime: null,
                timeBegan: null,
                MAX_TIME: 3000,
                interval : null,
            }
        },

        methods: {
            destroyed() {
                clearInterval(this.interval)
            },
            updateProgressbar(){
                const currentTime = new Date(), timeElapsed = new Date(
                        this.countDownTime - (currentTime - this.timeBegan)
                    );
                let time = currentTime - this.timeBegan;
                let el = document.getElementById("bar");
                let width = (time / this.MAX_TIME) * 100 + "%";
                width = parseFloat(width).toFixed(2);
                if (width > 100) width = 100;

                //console.log("width" + width);
                let widthStr = width + "%";
                el.style.width = widthStr;
                if(width === 100){
                    this.destroyed();
                    setTimeout(() => {
                        this.$router.replace("/intro");
                    },200)

                }
            }
        },
        mounted() {
            this.timeBegan = new Date();
            let el = document.getElementById("bar");
            el.style.width = "0%";

            if (this.progressbarHandler == null) {
                this.interval = setInterval(this.updateProgressbar, 30);
                this.progressbarHandler = this.interval;
            }
        },
    }
</script>

<style scoped>

</style>