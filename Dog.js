class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogBackground() {
    const dogBackgroundImg = `
	  url("${this.avatar}") no-repeat center
	  `;
    return dogBackgroundImg;
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getBadgeHtml() {
    return !this.hasBeenSwiped
      ? ` `
      : this.hasBeenLiked
      ? ` <img src="images/badge-like.png" class="badge" />`
      : `<img src="images/badge-nope.png" class="badge" />`;
  }

  getDogHtml() {
    const { name, age, bio } = this;
    return `
	<div class="dog-info">
        <h1 class="user-name">${name}, ${age}</h1>
        <p class="user-message">${bio}</p>
	</div>
	`;
  }
}

export default Dog;
