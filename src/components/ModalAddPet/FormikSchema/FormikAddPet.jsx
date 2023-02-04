import * as yup from "yup";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const SUPORTED_FORMAT = ["image/jpg", "image/jpeg", "image/png"];

export const form = {
  initialValues: {
    category: "sell",
    title: "",
    name: "",
    date_birth: "",
    breed: "",
    sex: "",
    price: "",
    photo: "",
    comment: "",
    location: "",
  },

  onSubmit: async (values, { resetForm }) => {
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
    date_birth: yup.date().when("category", {
      is: "sell",
      then: yup.date(),
    }),
    breed: yup.string(),
    sex: yup.string().required("Choose sex"),
    price: yup.string().when("category", {
      is: "sell",
      then: yup.string().required("Enter price"),
    }),
    location: yup.string().required("Enter your location"),
    imageURL: yup
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
