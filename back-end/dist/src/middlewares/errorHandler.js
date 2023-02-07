var errors = {
    "unauthorized": 401,
    "conflict": 409,
    "unprocessable": 422,
    "NotFound": 404
};
export function errorHandler(err, _req, res, _next) {
    var message = err.message || "Something went wrong";
    var status = errors[err.type] || 500;
    res.status(status).json({ message: message });
}
