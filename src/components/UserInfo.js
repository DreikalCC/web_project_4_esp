export default class UserInfo {
  constructor(name, job,avatarSelector){
    this.name = name;
    this.job = job;
    this.avatarLocation = avatarSelector;
    this.nameLocation = document.querySelector(".profile__name");
    this.jobLocation = document.querySelector(".profile__description");
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

  setUserInfo (name,about,_id) {
    this.name = name;
    this.job = about;
    this._id = _id;
    this.nameLocation.textContent = this.name;
    this.jobLocation.textContent = this.job;
  }

  setAvatar (avatar){
    this.avatar = avatar;
    this.avatarLocation.src = this.avatar;
  }

}