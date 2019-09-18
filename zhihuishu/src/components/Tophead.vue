<template>
    <div class="bignav">
        <div class="nav">
            <div><img src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/e5c6cdb2d67a45b5be9233f65a8d14b5.png" alt="" srcset=""></div>
            <div class="cen">
            <div><router-link to="/" v-bind:class="{ active: isActive1 }">首页</router-link></div>
            <div><router-link to="/Micspe" v-bind:class="{ active: isActive2 }">微专业</router-link></div>
            <div><router-link to="/Pshar" v-bind:class="{ active: isActive3 }">专业共享联盟</router-link></div>
            <div><router-link to="/Appdown" v-bind:class="{ active: isActive4 }">APP下载</router-link></div>
            <div>
                <input type="text" class="search" placeholder="请输入课程 / 学校 / 老师">
                <img  v-bind:src="seach" alt="">
            <!-- <div class="search1"></div> -->
            </div>
            </div>
            <div v-show="a"><router-link to="/Self">在线学堂</router-link></div>
            <div class="hl">
                <div>
                    <div class="">&nbsp;&nbsp;&nbsp;<img  v-bind:src="headsrc" alt="" class="headsrc"></div>
                    <div v-if="b">
                        <router-link to="/Login">登录</router-link>
                        /
                        <router-link to="/Reg">注册</router-link>
                    </div>
                    <div v-else>{{selfname}}</div>
                </div>
            </div>
            <!-- <div><router-link to="/">专业共享联盟</router-link></div> -->
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            a:false,
            b:true,
            isActive1:false,
            isActive2:false,
            isActive3:false,
            isActive4:false,
            seach:"seach.png",
            headsrc:"https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/3f7a3c52ca0f449aa1a4a0b29188fb2d.png",
            selfname:''
        }
    },
    created(){
        //  console.log(this.$route.path)
		if(this.$route.path=="/"){
            this.isActive1=true
		}else if(this.$route.path=="/Micspe"){
            this.isActive2=true
        }else if(this.$route.path=="/Pshar"){
            this.isActive3=true
        }else if(this.$route.path=="/Appdown"){
            this.isActive4=true
        }
	}
}
</script>

<style>
.bignav{
    height: 81px;
    background-color: white;
    position: fixed;
    top: 0px;
    box-shadow:0px 15px 10px -15px #777777;
}
.headsrc{
    width: 40px;
    height: 40px;
}
.search1{
    width: 50px;
    background-color: red;
}
.bignav{
    width: 100%;
    height: 81px;
    border-bottom: 1px solid #f5f5f5
}
.nav{
    margin: 0 auto;
    width: 1229px;
    height: 81px;
    display: flex;
    justify-content: space-between;
    align-items: center
}
a{
    text-decoration: none;
    color: #777;
    font-size: 14px
}
.search{
    /* height: 32px; */
    border: 1px solid #777777;
        padding: 7px 10px;
}
.search::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 12px;
}
.cen{
    display: flex;
    justify-content: space-between;
    width: 685px;
    align-items: center
}
.active{
    color: rgb(61, 132, 255)
}
</style>