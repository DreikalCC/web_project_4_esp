export default class UserInfo {
  constructor(name, job,avatarSelector, nameSelector, jobSelector){
    this.name = name;
    this.job = job;
    this.avatarLocation = avatarSelector;
    this.nameLocation = nameSelector;
    this.jobLocation = jobSelector;
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