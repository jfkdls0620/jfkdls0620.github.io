<template>
    <div class="nav-bar">
        <div class="nav-bar_time">{{nowTime}}</div>
        <div class="nav-data">
            <div class="nav-data-inner">
                <div class="nav-data_bar"></div>
                <div class="nav-data_bar"></div>
                <div class="nav-data_bar"></div>
                <div class="nav-data_bar"></div>
                <div class="nav-data_cell">5G</div>
            </div>
        </div>
    </div>
    <transition name="fadein" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
  export default {
    name: 'App',

    created() {
        document.title = "김동현의 포트폴리오";
        this.nowTimes();
        this.setDate();
        setInterval(this.nowTimes.bind(this) , 1000);
    },
      data(){
        return{
            nowTime: "00:00"
        }
      },
      methods: {
          setDate(){
              let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
              let mm =new Date().getMinutes() < 10? "0" + new Date().getMinutes(): new Date().getMinutes();

              return {
                  'hh' : hh
                  , 'mm' : mm
              }
          },
          nowTimes() {
              this.nowTime = this.setDate().hh + ":" + this.setDate().mm;
          }
      }

  }
</script>
