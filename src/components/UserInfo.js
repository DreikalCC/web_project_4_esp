export default class UserInfo {
  constructor(name, job,/* id, avatar*/){
    this.name = name;
    this.job = job;
    this._id = null;
    this.avatar = null;
    this.avatarLocation = document.querySelector(".profile__pic");
    //this.getUserInfo();
  }

  getUserInfo () {
    const userInfo = {
      name : this.name,
      job : this.job,
      _id: this._id,
      avatar: this.avatar,
    }
    return userInfo
  }

  setUserInfo (newUserName, newUserDesc, newUserId, newAvatar) {
    this.name = newUserName;
    this.job = newUserDesc;
    this._id = newUserId;
    this.avatar = newAvatar;
    this.avatarLocation.src = this.avatar;
    //this.getUserInfo();
  }

  setAvatar ({link}){
    console.log(this)
    this.avatarLocation.src = link;
    console.log(this)
  }

}