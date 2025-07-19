import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/About.jsx"),
  route("book-appointment", "routes/BookAnAppointment.jsx"),
  route("our-efforts", "routes/OurEfforts.jsx"),
];
