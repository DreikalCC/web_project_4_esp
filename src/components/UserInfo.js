import { person, desc } from "../scripts/utils.js";

export default class UserInfo {
  constructor(name, job){
    this.name = name;
    this.job = job;
  }

  getUserInfo () {
    const userInfo = {
      name : this.name,
      job : this.job,
    }
    return userInfo
  }
  setUserInfo () {
    person.textContent = this.name;
    desc.textContent = this.job;
  }
}