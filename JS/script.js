const { createApp } = Vue;

createApp({
  data() {
    return {
      randomMail: "",
      username: "",
      mails: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/name")
      .then((resp) => {
        console.log(resp);
        this.username = resp.data.response;
      });
  },
  methods: {
    generateMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
        if(this.mails.length < 10){
        for(let i = 0; i < 10; i++){
        this.randomMail = "";
          this.randomMail = resp.data.response
          console.log(this.randomMail);
          this.mails.push(resp.data.response);
        }
    }
        });
    },
  },
}).mount("#app");