import { NextFunction, Request } from "express";

const serializeError = (error: Error): Record<string, any> => {
  return {
      name: error.name,
      message: error.message,
      stack: error.stack
  };
}
// Middleware function to handle success responses
export const handleSuccess = (req: Request, res: any, next: NextFunction) => {
  res.success = (data: any, statusCode = 200, message = "Success") => {
    res.status(statusCode).json({
      success: true,
      message,
      data // Send data along with the response
    });
  };
  next();
};

// Middleware function to handle error responses
export const handleError = (req: Request, res: any, next: NextFunction) => {
  res.error = (error: any, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      error: serializeError(error),
    });
  };
  next();
};


