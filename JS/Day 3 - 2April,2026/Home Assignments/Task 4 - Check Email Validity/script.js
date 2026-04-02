function isValidEmail(str) {
  return str.includes("@") && (str.endsWith(".com") || str.endsWith(".in"));
}
