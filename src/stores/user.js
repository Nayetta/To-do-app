import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    //THIS FUNCTION FETCH THE USERS DATA
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    //THIS FUNCTION ALLOWS THE USER TO CREATE A PROFILE
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      // if (user) {
      //   this.user = user;
      //   console.log(this.user);
      // }
    },

    //THIS FUNCTION SAVES THE USER DATA IN THE PROFILES TABLE FROM SUPABASE
    async addUser(email) {
      //console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("profiles").insert([
        {
          id: supabase.auth.currentUser.id,
          email: email,
        },
      ]);
    },
    //THIS FUNCTION UPDATE THE USERNAME IN THE PROFILES TABLE FROM SUABASE
    async updateUser(nickname) {
      //console.log(useUserStore().user.id);
      const { data, error } = await supabase
        .from("profiles")
        .update([
          {
            username: nickname,
          },
        ])
        .match({ id: useUserStore().user.id });
    },
    //THIS FUNCTION ALLOWS THE USER TO ENTER THEIR PROFILE
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },

    //THIS FUNCTION LOG OUT THE USER
    async signOut() {
      const { error } = await supabase.auth.signOut();
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
