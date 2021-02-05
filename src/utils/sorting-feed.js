export const sortTypeEnum = {
  default: 0,
  likes: 1,
  reposts: 2,
  comments: 3,
  date: 4
}

const checkCounts = (a, b, order) => {
  return order ? a - b : b - a;
}

export const sortForFeed = (a, b, sorting) => {
  switch (sorting.type) {
    case sortTypeEnum.likes:
      return checkCounts(a.likes.count, b.likes.count, sorting.order);
    case sortTypeEnum.reposts:
      return checkCounts(a.reposts.count, b.reposts.count, sorting.order);
    case sortTypeEnum.comments:
      return checkCounts(a.comments.count, b.comments.count, sorting.order);
    case sortTypeEnum.date:
      return checkCounts(a.date, b.date, sorting.order);
    default:
      return 1;
  }
}