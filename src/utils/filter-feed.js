export const filterTypeEnum = {
  disable: 0,
  photo: 'photo',
  link: 'link',
  video: 'video'
}

export const filterFeed = (feed, type) => {
  if (type !== filterTypeEnum.disable) {
    return feed.filter(o => {
      if (!o.attachments) return false;
      for (let i = 0; i < o.attachments.length; i++){
        if (o.attachments[i].type === type){
          return true;
        }
      }
      return false;
    });
  } else {
    return null;
  }
}