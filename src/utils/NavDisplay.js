export default function navDisplay(path) {
  if (
    path.includes("/doctor") ||
    path === "/" ||
    path.includes("/users") ||
    path.includes("/admin") ||
    path.includes("/patient")
  ) {
    return true;
  } else {
    return false;
  }
}
