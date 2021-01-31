class BaseResponse {

  private static pageNumber: any;
  private static instance: BaseResponse;

  static getInstance(): BaseResponse {
    if (!BaseResponse.instance) {
      BaseResponse.instance = new BaseResponse();
    }
    return BaseResponse.instance;
  }

  public baseResponse(): any {
    // Add common properties of api response here
    BaseResponse.pageNumber = 1; // TODO: Remove dummy field when pagination is implemented
  }

}

export default BaseResponse.getInstance();
