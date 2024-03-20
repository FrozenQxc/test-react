function twoSum(nums, target) {
	const comp = {}
	for (let i = 0; i < nums.length; i++) {
		if (comp[nums[i]] >= 0) {
			return [comp[nums[i]], i]
		}
		comp[target - nums[i]] = i
	}
}

console.log(twoSum([10, 10, 10, 10, 20, 20], 40)) //
