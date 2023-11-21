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
        for(let i = 0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.randomMail = "";
                this.randomMail = resp.data.response
                console.log(this.randomMail);
                this.mails.push(this.randomMail)
            })
        }
    }
}
}).mount("#app");