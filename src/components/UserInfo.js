import { person, desc } from "../utils/utils.js";

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
  setUserInfo (newUserName, newUserDesc) {
    person.textContent = newUserName;
    desc.textContent = newUserDesc;
  }
}