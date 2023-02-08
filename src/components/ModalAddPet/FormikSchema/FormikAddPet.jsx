import * as yup from "yup";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { store } from "../../../redux/store";
import moment from "moment/moment";
import { objectFixer } from "../../../helpers/objetFixer";

const SUPORTED_FORMAT = ["image/jpg", "image/jpeg", "image/png"];

const postedNoticePet = async (info) => {
  // console.log(info.getAll());
  try {
    Notify.success("Posted!")
    return axios({
      method: "post",
      url: "/api/notices",
      data: info,
      headers: { "Authorization": `${store.getState().auth.token}`,
      "Content-Type": "multipart/form-data" 
      
      },
      // validateStatus: function (status) {
      //   return status < 500; // Resolve only if the status code is less than 500
      // }
    });
  } catch (error) {
    Notify.error("Something go went, please try again");
    console.log(error.response.date);
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
    price: "1",
    petImage: "",
    comment: "",
    place: "",
  },

  onSubmit: (values, { resetForm }) => {
    values = objectFixer(values);
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    postedNoticePet(formData);
    setTimeout(() => {
      resetForm();
    }, 300);
    console.log(values);
  },

  validationSchema: yup.object({
    category: yup.string().required("Choose category"),
    title: yup.string().min(2, "min 2 characters long")
    .max(24, "max 24 characters long")
    .required("Write the title*"),
    name: yup.string(),
    birthdate: yup.date().when("category", {
      is: "sell",
      then: yup.date(),
    }),
    breed: yup.string().trim().min(2, "min 2 characters long")
    .max(18, "max 18 characters long"),
    sex: yup.string().required("Choose sex*"),
    price: yup.string()
    .when("category", {
      is: "sell",
      then: yup.string().required("Enter price*")
      .test((value, context) => {
        if(value === 0) {
          context.createError({message: "price can't be '0'"})
        }
        return true;
      }),
    }),
    place: yup.string().required("Enter your location*"),
    petImage: yup
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
