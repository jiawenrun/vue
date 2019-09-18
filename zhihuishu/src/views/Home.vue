<template>
  <div class="home">
    <Tophead></Tophead>
    <div class="top"></div>
    <div class="banner">
      <div class="banimg">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/99a71f3b0cb54e01b9531f307d6e820d.png"
          alt
        />
      </div>
      <div class="car">
        <div class="bgc">
          <div class="bl"  @click="lt" >&lt;</div>
          <div class="br"  @click="gt" >&gt;</div>
          <div  v-bind:class="{bb1:isbb1,bb2: isbb2}" ref="pTag" id="bb1">
          <ul class="car0">
            <li class="car1"><div>新课上线</div></li>
            <li class="car2"><div>艺术体验与审美鉴赏</div></li>
            <li class="car3"><div>大思政</div></li>
            <li class="car4"><div>创新创业与职业就业</div></li>
            <li class="car5"><div>健康安全</div></li>
            <li class="car6"><div>健康安全</div></li>
            <li class="car7"><div>中国历史与文化传承</div></li>
            <li class="car8"><div>世界眼光与国际视野</div></li>
            <li class="car9"><div>社会科学与批判性思维</div></li>
            <li class="car10"><div>生态文明与生命关怀</div></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script>
export default {
  data:function(){
    return{
      a:false,
      isbb2:false,
      isbb1:true,
      le:''
    }
  },
  methods:{
    
    gt:function(){
      // var le=document.querySelector("#bb1")
      // var a=le.style.left
      this.isbb1=false
      this.isbb2=true
      // console.log(le.style)
    },
    lt:function(){
      this.isbb1=true
      this.isbb2=false
    }
  },
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>




<style>
.bgc{
  position: relative;
}
.bb1{
  position: absolute;
  left: 0;
  transition: left 1s;
}
.bb2{
  position: absolute;
  transition: left 1s;
  left: -1040px;
}

.car0{
  width: 2200px;
}
.car0>li{
  position: relative;
  list-style: none;
  display: inline-block;
  width: 200px;
  height: 92px;
  background-color: blue;
  text-align: center;
  top: 10px;
}
.car0>li:hover{
  /* height: 100px; */
  top: 0px
}
.car0>li div{
  width: 94px;
  position: absolute;
  color: white;
  font-size: 16px;
  font-weight: bold;
  word-break:break-all;
  height: 100px;
  top: 25px;
  left: 70px;
}
.car2,.car4,.car7,.car9{
  margin: 0 10px
}
.top {
  height: 81px;
}
.banner {
  width: 100%;
  height: 220px;
  background-image: linear-gradient(180deg, #0a4dc2 0%, #226cec 100%);
  padding-top: 80px;
  overflow: hidden;
}
.banimg {
  width: 400px;
  margin: 0 auto;
}
.car {
  width: 1040px;
  height: 100px;
  margin: 24px auto 0;
  overflow: hidden;
  position: relative;
}

.bl{
  position: absolute;
  width: 25px;
  height: 50px;
  top: 24px;
  left: 0px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(255, 255,255, 0.4);
  color: rgba(255, 255,255, 0.3);
  z-index: 100;
}
.br{
  position: absolute;
  width: 25px;
  height: 50px;
  right:0px;
  top:24px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(255, 255,255, 0.4);
  color: rgba(255, 255,255, 0.3);
  z-index: 100;
}
.car1{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b50e22b961f948c2a405a5ce77547382.jpg');
  background-size: cover
}
.car2{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4e14143d9faa478f909379f7e356c55d.png');
  background-size: cover
}
.car3{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/86abd9eede164141bf12a40dbec9005f.jpg');
  background-size: cover
}
.car4{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4644b01d8756443aa48cf71e4dbcd03e.jpg');
  background-size: cover
}
.car5{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b9bf010fbfa04e9ebcae16668938f79c.jpg');
  background-size: cover
}
.car6{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b50e22b961f948c2a405a5ce77547382.jpg');
  background-size: cover
}
.car7{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4e14143d9faa478f909379f7e356c55d.png');
  background-size: cover
}
.car8{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/86abd9eede164141bf12a40dbec9005f.jpg');
  background-size: cover
}
.car9{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4644b01d8756443aa48cf71e4dbcd03e.jpg');
  background-size: cover
}
.car10{
  background-image: url('https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b9bf010fbfa04e9ebcae16668938f79c.jpg');
  background-size: cover
}
</style>