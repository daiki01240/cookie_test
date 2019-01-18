<template>
  <div class="text-center">
    <p>
      Link : {{pub_key}}
      <br>
      Cookie : {{cookie}}
    </p>
    <el-button type="primary" @click="checkPubkey">check pub_key</el-button>
    <br>
    <br>
    <hr>
    <br>
    <form>
      <div class="form-content">
        <span>Generate URL</span>
        <el-input placeholder="" v-model="formData.url" />
      </div>
      <div class="text-right">
        <el-button type="primary" @click="generateUrl">Generate</el-button>
      </div>
      <p>
        Short URL:  {{short_url}}
      </p>
    </form>
  </div>
</template>


<script>
import Cookies from 'universal-cookie'
export default {
  data(){
    return{
      pub_key: this.$route.params.id,
      cookie: "",
      formData: {
        url: ""
      },
      short_url:""
    }
  },
  methods: {
    async checkPubkey(){
      const cookies = new Cookies()
      const send_user = cookies.get('pub_key')
      console.log(send_user)
      this.cookie = send_user
    },
    async generateUrl(){
      const FIREBASE_API_KEY = ''
      const DYNAMICLINKS_DOMAIN = ''
      const REF_LINK = this.formData.url
      const body ={"dynamicLinkInfo": {
            "domainUriPrefix": `${DYNAMICLINKS_DOMAIN}`,
            "link": `${REF_LINK}`,
            "androidInfo": {
              "androidPackageName": "com.example.android"
            },
            "iosInfo": {
              "iosBundleId": "com.example.ios"
            }
          },
            "suffix": {
            "option": "SHORT"
          }
        }

      try {
      this.$axios.$post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${FIREBASE_API_KEY}`, body)
      .then(response => {
        console.log(response.shortLink)
        this.short_url = response.shortLink
      })
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style>
.text-center {
  text-align: center;
}
</style>
