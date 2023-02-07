import { toast } from "react-toastify";
import { API_CODE } from "../constants/apiCode";

export const notificationHandler = (msg) => {
  switch (msg) {
    case API_CODE.CREATED_SUCCESS:
      toast.success(
        "Created success! Please check your message to receive our validation code"
      );
      break;
    case API_CODE.CREATED_FAILED:
      toast.error("Created failed! Please check your phone number to again");
      break;
    case API_CODE.VALIDATED_SUCCESS:
      toast.success("Your phone is validated!");
      break;
    case API_CODE.VALIDATED_FAILED:
      toast.error("Invalid validation code");
      break;
    case API_CODE.SERVER_ERROR:
      toast.error("There is an unexpected error! Please try again later");
      break;
    default:
      break;
  }
};
