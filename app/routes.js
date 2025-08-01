import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/About.jsx"),
  route("booking", "routes/BookAnAppointment.jsx"),
  route("our-effort", "routes/OurEfforts.jsx"),
  route("api/contact", "routes/api.contact.js"),
];
