function isValidPhone(phone) {
  return String(phone)
    .toLowerCase()
    .match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    );
}

export default isValidPhone;