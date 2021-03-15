export default function validateSignup(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  }

  if (!values.email) {
    errors.email = "Your email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 7) {
    errors.password = " Password should be seven charcters long.";
  }

  return errors;
}
