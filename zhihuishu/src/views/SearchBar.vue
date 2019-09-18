<template>
  <div class="s">
    <div class="searchbar">
      <span class="text1">首页</span>
      <span class="chract">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/9f903160b6bf4b62947e67a8d903535a.png"
          alt
          srcset
        />
      </span>
      <span class="text2">搜索结果</span>
    </div>
    <div class="content">
      <!-- 搜索栏 -->
      <div class="s-box">
        <div class="c-div">
        <input type="text" name="" id="" class="c-inp" placeholder="输入课程名称、开课学校或教师">
        <div class="remove"><img src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/27cdd89b3a9642df8b29d30683699946.png" alt=""></div>
        </div>
        <button class="c-btn">
          <i class="c-i"><img src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/70d72fbc459d41df9257e010de4ea52b.png" alt="" srcset=""></i>
          搜索</button>
      </div>
      <!-- 展示栏 -->
      <div class="show">
        <img src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/86ad0d2951bb4806aac69d692ee42332.png" alt="" srcset="" class="s-img">
        <p class="s-text">请输入关键字以查找课程！</p>
      </div>
    </div>
  </div>
</template>
<style >
body {
  background-color: #f6f6f6;
}
.searchbar {
  width: 1050px;
  height: 24px;
  line-height: 24px;
  margin: 20px auto;
  color: #777777;
  position: relative;
}
.searchbar span {
  display: inline-block;
}
.chract {
  display: inline-block;
  width: 20px;
  height: 12px;
  vertical-align: middle;
  position: absolute;
  top: 2px;
  left: 43px;
}
.text2 {
  position: absolute;
  top: 2px;
  left: 70px;
  color: #2a2a2a;
}
.content {
  width: 1050px;
  height: 590px;
  margin: 13px auto;
  background-color: #fff;
  padding-top: 50px;
  box-sizing: border-box;
}
.s-box {
  width: 604px;
  height: 50px;
  margin: 0 auto;
}
.c-div {
  width: 490px;
  height: 50px;
  float: left;
  border: 2px solid #ededed;
  box-sizing: border-box;
  position: relative;

}
.c-btn{
     width: 110px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #3D84FF;
    color: #fff;
    font-size: 14px;
    border: none;
}
.c-i{
  width: 10px;
    height: 32px;
    display: block;
    float: left;
    margin-top: 9px;
    margin-left: 19px;
}
.c-inp{
  width: 460px;
  padding-left: 20px;

  height: 25px;
  line-height: 25px;
  margin-top: 10px;
  font-size: 14px;
  color: #777777;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.c-inp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 14px;
}
.remove{
  display: inline-block;
  width: 26px;
  height: 29px;
  position: absolute;
  top:14px;
  right: -4px;
}
.show{
  width: 1000px;
  height: 400px;
  /* background-color: #ccc; */
  margin-top: 50px;
  margin-left: 25px;
  text-align: center;
  color: #777777;
}
.s-img{
  width: 60px;
  margin-top: 50px;
  height: 60px;
}
.s-text{
  margin-top: 20px;
}
</style>