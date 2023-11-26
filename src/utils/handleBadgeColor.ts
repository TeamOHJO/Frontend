export function handleBadgeColor(value: string) {
  switch (value) {
    case '호텔/리조트':
      return 'purple';
    case '한옥':
      return 'orange';
    case '펜션/풀빌라':
      return 'blue';
    case '모텔':
      return 'green';
    default:
      return 'red';
  }
}
