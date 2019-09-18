<template>
  <form class="login" :mode="form" ref="form">
    <logintop></logintop>
    <div class="navgt">
      <div class="inner">
        <router-link to="/Login" class="reg phone">手机号</router-link>
        <router-link to="/Sno" class="reg">学号</router-link>
        <router-link to="/Reg" class="reg reg2">注册</router-link>
        <span class="line"></span>
      </div>
    </div>
    <div class="tel" prop="tel">
      <div class="mgimg">
        <i class="tel_i">
          <img
            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
            alt
          />
        </i>
      </div>
      <input type="text" class="myinp" placeholder="请输入手机号" v-model="form.tel" />
    </div>
    <div class="tel" prop="passwd">
      <div class="mgimg">
        <i class="tel_i">
          <img
            class="img2"
            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
            alt
          />
        </i>
      </div>
      <input type="text" class="myinp" placeholder="请输入密码" v-model="form.passwd" />
    </div>
    <div class="login-btn" @click="submitForm('form')">登&nbsp;&nbsp;录</div>
    <div class="rem">
      <div class="rember"></div>
      <div class="text">记住我</div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="other">
      <div class="oline oline1"></div>
      <div class="ltext">其他登陆方式</div>
      <div class="oline oline2"></div>
    </div>
    <div class="way">
      <router-link to class="aimg one">
        <img
          src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/5ee01384a6454454ab4b189d60cfe75e.png"
          alt
          srcset
        />
      </router-link>
      <router-link to class="aimg two">
        <img
          src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/142f501af4824ad7bcd23cadd1f2422e.png"
          alt
          srcset
        />
      </router-link>
      <router-link to class="three">教工号登录</router-link>
    </div>
    <div class="detail">
      <span>如登录、注册遇到问题，请&nbsp;</span>
      <router-link to class="ser">联系客服</router-link>
    </div>
  </form>
</template>
<script>
export default {
   data() {
      return {
        form: {
          tel: '',
          passwd:''
        }
      }
    },
    methods: {
     submitForm(form) {
       console.log("11111")
          this.axios.post(this.axios.defaults.url+"/user/login", this.form)
            .then((response) =>{
              this.$message(response.data.Msg);
              if(response.data.Msg=="登陆成功"){
              this.$router.push({ path: '/' });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
    }
  }
}
</script>
<style>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -315px;
  margin-left: -200px;
  width: 400px;
  height: 630px;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 33, 79, 0.11);
  border-radius: 6px;
}

.navgt {
  margin-top: 46px;
  width: 400px;
  height: 46px;
  border-bottom: 1px solid #ededed;
}
.navgt .inner {
  width: 355px;
  height: 40px;
  margin: 0 auto;
  position: relative;
}
.reg {
  display: inline-block;
  width: 60px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  color: #777;
  transition: all ease-in 0.2s;
  margin-right: 20px;
  margin-left: 5px;
  text-align: center;
}
.phone {
  font-weight: bold;
  font-size: 18px;
  color: #2a2a2a;
}
.line {
  display: inline-block;
  width: 43px;
  height: 4px;
  background-color: #3d84ff;
  position: absolute;
  left: 11px;
  /* left: 6px; 109  284*/
  bottom: 0;
}
.reg2 {
  float: right;
}
.tel {
  width: 340px;
  height: 40px;
  margin: 25px auto;
  position: relative;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.mgimg {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: absolute;
  text-align: center;
  border-right: 1px solid #ededed;
  top: 10px;
  overflow: hidden;
}
.tel_i {
  display: inline-block;
  width: 18px;
  height: 20px;
  position: relative;
}
.myinp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 18px;
}
.myinp {
  border: none;
  background: #f6f6f6;
  width: 340px;
  padding-left: 55px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #3d4059;
  box-sizing: border-box;
}
.img2 {
  position: absolute;
  top: 0;
  left: -89px;
}
.rem .rember {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
  border-radius: 2px;
  background-image: url(https://image.zhihuishu.com/zhs/ablecommons/demo/201907/d5fb949524a44f7987ad821a1079ebaf.png);
}
.text {
  margin-left: 15px;
}
.forget {
  margin-left: 210px;
}
.login-btn {
  margin: 42px auto 0;
  width: 340px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background: #3d84ff;
}
.rem {
  width: 340px;
  height: 20px;
  margin: 14px auto 0;
  position: relative;
  line-height: 20px;
  font-size: 14px;
  color: #777;
}
.rem div {
  display: inline-block;
}
.two {
  top: 0;
  left: 86px;
}
.three {
  border: 1px solid #ededed;
  width: 130px;
  height: 40px;
  font-size: 18px;
  color: #777777;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
}
.three:hover {
  color: #cbcbcb;
}
.way {
  width: 303px;
  height: 44px;
  margin: 25px auto;
  position: relative;
}
.way .aimg {
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
}
.way .aimg img {
  width: 40px;
  height: 40px;
}
.other {
  text-align: center;
  width: 340px;
  height: 18px;
  margin: 10px auto;
  line-height: 18px;
  font-size: 16px;
  color: #777;
}
.ltext {
  margin: 0 10px;
}
.oline {
  width: 112px;
  height: 2px;
  margin-bottom: 4px;
  border-bottom: 1px solid #ededed;
}
.other div {
  display: inline-block;
}
.detail {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  height: 16px;
  text-align: center;
  font-size: 14px;
  color: #bfbfbf;
}
.ser {
  color: #000;
}
</style>