export default class UserInfo {
  constructor(name, job){
    this.name = document.querySelector(".input__name");
    this.job = document.querySelector(".input__description");
  }

  getUserInfo () {
    const userInfo = {
      name : this.name.textContent,
      job : this.job.textContent,
    }
    return userInfo
  }
  setUserInfo (newUserName, newUserDesc) {
    this.name.textContent = newUserName;
    this.job.textContent = newUserDesc;
  }
}