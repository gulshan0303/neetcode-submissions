class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums: number[]): boolean {
    //    for(let i=0;i<nums.length;i++){
    //       if(nums[i]===nums[i+1]){
    //          return true;
    //       }
    //    }
    //    return false;
    // }
// not just consecutive
  hasDuplicate(nums: number[]): boolean {
       let seen = new Set<number>;
       for(let num of nums){
        if(seen.has(num))return true;
        seen.add(num);
       }
       return false;
    }

}
