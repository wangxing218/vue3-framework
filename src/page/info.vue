<template>
  <div class="height-full">
    <div class="video-wrap">
      <video
        class="video"
        src="http://oss.xfinfr.com/7KVTLYLO/meap/template/cl_xuanchanzp/preview.mp4"
        poster="http://oss.xfinfr.com/7KVTLYLO/meap/template/cl_xuanchanzp/imageResource/preview.png"
        controls
        preload="none"
      ></video>
    </div>
    <div class="pd-md">
      <h3 class="font-md">奔驰4S店-奔驰S级</h3>
      <div class="font-xs pdt-md lh-16">
        活动规则：<br />
        1、视频彩铃业务：10元/月，业务费用将自动从您的话费中扣
        除；若您已经开通同类业务则不可再次开通。<br />
        2、在网6个月以上（包含6月），可免费获得一次奔驰轿车基础 检测。<br />
        3、设置视频彩铃后，当有人拨打您的电话时，对方就可以看见
        您设置的视频彩铃。
      </div>

      <div class="flex pdt-lg">
        <div class="form-icon"></div>
        <div class="form-area flex-auto flex">
          <input
            class="flex-auto form-input"
            type="tel"
            maxlength="11"
            placeholder="请输入手机号码"
          />
          <div class="color-blue font-xs" @click="getCode">{{ codeTxt }}</div>
        </div>
      </div>
      <div class="flex pdt-md">
        <div class="form-icon icon-lock"></div>
        <div class="form-area flex-auto flex">
          <input
            class="flex-auto form-input"
            type="tel"
            maxlength="6"
            placeholder="请输入验证码"
          />
        </div>
      </div>
      <div class="btn" @click="submit">为他代言</div>
      <div class="agree flex justify-center">
        <div class="check checked"></div>
        <span>已经阅读并同意</span>
        <a class="color-blue" href="">《广告彩铃用户协议》</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-wrap {
  width: 100%;
  height: 228px;
  overflow: hidden;
  .video {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
}
.form {
  padding-top: 30px;
}
.form-icon {
  width: 22px;
  height: 22px;
  margin-right: 10px;
  background: url('@image/icon-user.png') no-repeat center center;
  background-size: 16px;
  &.icon-lock {
    background-image: url('@image/icon-lock.png');
  }
}
.form-area {
  border-bottom: 1px solid #eee;
}
.form-input {
  border: none;
  height: 40px;
  outline: none;
}
.btn {
  width: 274px;
  height: 42px;
  line-height: 42px;
  margin: 30px auto;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  background-image: linear-gradient(
    270deg,
    rgba(63, 131, 245, 1),
    rgba(79, 145, 255, 1)
  );
  box-shadow: 0px 5px 9px 1px rgba(103, 186, 248, 0.23);
  border-radius: 21px;
}
.agree {
  font-size: 10px;
  padding-bottom: 10px;
  line-height: 20px;
  .check {
    width: 20px;
    height: 20px;
    background: url('@image/check.png') no-repeat center center;
    background-size: 20px;
    &.checked {
      background-image: url('@image/checked.png');
    }
  }
}
</style>

<script>
import { onMounted, reactive, toRefs, computed, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup(ctx) {
    const route = useRoute()
    const router = useRouter()

    const state = reactive({
      time: 0,
    })
    const codeTxt = computed(() => {
      return state.time === 0 ? '获取验证码' : `( ${state.time} s )`
    })

    onMounted(() => {
      console.log(route.query.id)
      console.log('info page onMounted')
    })

    onBeforeUnmount(() => {
      if (tick) {
        clearInterval(tick)
        tick = null
      }
    })

    let tick = null
    function getCode() {
      if (tick || state.time > 0) return
      state.time = 10
      tick = setInterval(() => {
        state.time--
        if (state.time === 0) {
          alert(2)
          clearInterval(tick)
          tick = null
        }
      }, 1000)
    }

    function submit() {
      router.replace('/msg')
    }

    return {
      ...toRefs(state),
      submit,
      codeTxt,
      getCode,
    }
  },
}
</script>