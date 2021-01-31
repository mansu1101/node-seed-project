<template>
  <div class="hello">
     <img alt="Sekady logo" class="img" src="../assets/images/SekadyLogo.jpg">
    <form @submit.prevent="login">
      <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
        <label for="user-name">Username </label>
        <input id="user-name" name="user-name" placeholder="abc@sekady.com" type="text" v-model.trim="userName" @blur="validateInput" /><br>
        <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
      </div>
      <div class="form-control">
        <label for="password">Password </label>
        <input id="password" name="password" type="password" v-model="password" /><br>
      </div>
      <p v-if="!formIsValid">Please enter a valid email and password</p>
        <button>Sign in</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  props: {
    msg: String
  },
  data () {
    return {
      userName: '',
      password: '',
      userNameValidity: 'pending',
      isAuthenticated: false,
      authToken: '',
      formIsValid: true,
      isLoading: false,
      error: null
    }
  },
  methods: {
    async login() {
      //something
      this.formIsValid = true;
      if (this.userName === '' || !this.userName.includes('@')) {
        this.formIsValid = false;
        return;
      }
      //send http request
      if (this.userName === "abc@sekady.com" && this.password === "sekady") {
        this.$router.push('/home');
      }
      this.userName = '';
      this.password = '';
      /* try {
        await this.$store.dispatch('login', {
        userName: this.userName,
        password: this.password
      });
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      } */
    },
    validateInput () {
      if(this.userName === '')
      {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    },
    }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid p {
  color: red;
}
input[type=text], input[type=password] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #2e3beb;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
}

button:hover {
  opacity: 0.8;
}

.img {
    width: 20%;
    height: 40%;
  }
</style>