function lengthOfArray(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError('Input must be an array');
  }
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number' || isNaN(nums[i])) {
      throw new TypeError('All elements in the array must be valid numbers');
    }
  }
  if (nums.length === 0) {
    return 0;
  }
  function checkPos(sub, val) {
    let left = 0,
      right = sub.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (sub[mid] === val) {
        return mid;
      } else if (sub[mid] < val) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
  const sub = [];
  for (let num of nums) {
    let pos = checkPos(sub, num);
    if (pos >= sub.length) {
      sub.push(num);
    } else {
      sub[pos] = num;
    }
  }
  return sub.length;
}