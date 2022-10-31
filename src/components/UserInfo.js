export default class UserInfo {
  constructor(name, job, id){
    this.name = name;
    this.job = job;
    this._id = id;
    this.avatar = document.querySelector(".profile__pic").src;
    //this.getUserInfo();
  }

  getUserInfo () {
    const userInfo = {
      name : this.name.textContent,
      job : this.job.textContent,
      _id: this._id
    }
    return userInfo
  }

  setUserInfo (newUserName, newUserDesc, newUserId) {
    this.name.textContent = newUserName;
    this.job.textContent = newUserDesc;
    this.name = newUserName;
    this.job = newUserDesc;
    this._id = newUserId;
    this.getUserInfo();
  }

  setAvatar (url){
    this.avatar = url;
  }

}