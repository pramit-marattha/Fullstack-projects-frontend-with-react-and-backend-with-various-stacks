export default function validateCreateProduct(values) {
  let errors = {};

  if (!values.title) {
    errors.title = "Title is required.";
  }

  if (!values.description) {
    errors.description = "Your description is required.";
  } else if (values.description.length < 5) {
    errors.description = "The description must be atleast 10 character long";
  }

  if (!values.url) {
    errors.url = "URL is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = " URL should be valid";
  }

  return errors;
}
