import HttpStatusCode from './http-status.util';

type Response = { data?: object; errors?: object | boolean; message: string };
type SuccessParams = { response: any; data?: object; message?: string };
type ErrorParams = { response: any; errors?: object | boolean; message?: string };

function formatResponse(params: Response) {
  const { data, errors = false, message } = params;
  return {
    data,
    errors,
    message,
  };
}

class ResponsFormatter {
  static SUCCESS(params: SuccessParams) {
    const { message = 'Request Successful', data = {}, response } = params;
    const responseDetails = formatResponse({ data, message });
    return response.status(HttpStatusCode.OK().value).json(responseDetails);
  }

  static CREATED(params: SuccessParams) {
    const { message = 'Request Successful', data = {}, response } = params;
    const responseDetails = formatResponse({ message });
    return response.status(HttpStatusCode.CREATED().value).json(responseDetails);
  }

  static INVALID_REQUEST(params: ErrorParams) {
    const { message = 'Request failed', errors = true, response } = params;
    const responseDetails = formatResponse({ errors, message });
    return response.status(HttpStatusCode.INVALID_REQUEST().value).json(responseDetails);
  }

  static UNPROCCESSABLE_ENTITY(params: ErrorParams) {
    const { message = 'Request failed', errors = true, response } = params;
    const responseDetails = formatResponse({ errors: true, message });
    return response.status(HttpStatusCode.UNPROCESSABLE_ENTITY().value).json(responseDetails);
  }
}

export default ResponsFormatter;
