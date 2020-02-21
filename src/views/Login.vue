<template>
  <div class="about">
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button class="btn btn-lg btn-primary pull-xs-right" @click="signup()">Sign in</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    signup() {
      console.log(this.email, "email");
      console.log(this.password, "password");
    }
  }
};
</script>
