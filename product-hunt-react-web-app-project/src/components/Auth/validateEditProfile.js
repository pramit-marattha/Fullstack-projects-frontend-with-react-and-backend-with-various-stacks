export default function validateEditProfile(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  }

  if (!values.email) {
    errors.email = "Your email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  if (!values.currentPassword) {
    errors.currentPassword = "Current Password is required.";
  } else if (values.currentPassword.length < 7) {
    errors.currentPassword = " Password should be seven charcters long.";
  }

  if (!values.newPassword) {
    errors.newPassword = "Password is required.";
  } else if (values.newPassword.length < 7) {
    errors.newPassword = " Password should be seven charcters long.";
  }

  return errors;
}
