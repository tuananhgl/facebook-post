const ApiResponse = {};

ApiResponse.error = (status=400, message='', reason='') => {
	return {
		status: status,
		message: message,
		reason: reason
	}
}

ApiResponse.success = (status=200, message='',data=[]) => {
	return {
		status: status,
		message: message,
		data: data
	}
}

module.exports = ApiResponse;