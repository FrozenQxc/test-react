import './App.css'

function App() {
	const twoSum = function (nums, target) {
		const comp = {}
		for (let i = 0; i < nums.length; i++) {
			if (comp[nums[i]] >= 0) {
				return [comp[nums[i]], i]
			}
			comp[target - nums[i]] = i
		}
	}

	console.log(twoSum([2, 7, 11, 15], 9))

	const f1 = (a, b) => a + b

	console.log(f1(5, 5))

	return (
		<div>
			<h1>Решаем алгоритмы</h1>
		</div>
	)
}

export default App
