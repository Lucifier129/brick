export let INCRE = (state) => {
	return {
		...state,
		count: state.count + 1
	}
}

export let DECRE = (state) => {
	return {
		...state,
		count: state.count - 1
	}
}