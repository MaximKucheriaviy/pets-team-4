import * as yup from "yup";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectToken } from "../../../redux/auth/autSelectors";

const SUPORTED_FORMAT = ["image/jpg", "image/jpeg", "image/png"];

axios.defaults.baseURL = "https://petse-server-team4.onrender.com/";

const config = {
  headers: { Authorization: `${selectToken}` },
};

const postedNoticePet = async ({ dates }) => {
  console.log("noooooooo");
  try {
    return await axios({
      method: "post",
      url: "/api/notices",
      data: dates,
      headers: { "Authorization" : `${selectToken}` },
    });
  } catch (error) {
    Notify.failure("Something went wrong, please try again");
  }
};

export const form = {
  initialValues: {
    category: "sell",
    title: "",
    name: "",
    birthdate: "",
    breed: "",
    sex: "",
    price: "",
    photo: "",
    comment: "",
    place: "",
  },

  onSubmit: async (values, { resetForm }) => {
    postedNoticePet(values);
    await setTimeout(() => {
      resetForm();
    }, 300);
    Notify.success("Posted!");
    console.log(values);
  },

  validationSchema: yup.object({
    category: yup.string().required("Choose category"),
    title: yup.string().required("Write the title"),
    name: yup.string(),
    birthdate: yup.date().when("category", {
      is: "sell",
      then: yup.date(),
    }),
    breed: yup.string(),
    sex: yup.string().required("Choose sex"),
    price: yup.string().when("category", {
      is: "sell",
      then: yup.string().required("Enter price"),
    }),
    place: yup.string().required("Enter your location"),
    photo: yup
      .mixed()
      .nullable()
      .test(
        "FILE_SIZE",
        "Uploadet file is too big.",
        (value) => !value || (value && value.size <= 1224 * 1224)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file is unsuported format.",
        (value) => !value || (value && SUPORTED_FORMAT.includes(value?.type))
      ),
    comment: yup.string(),
  }),
};
