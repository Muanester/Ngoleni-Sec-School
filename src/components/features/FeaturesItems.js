import EventImg from "../../assets/images/events.jpg";
import SportsImg from "../../assets/images/sports.jpg";
import AdminImg from "../../assets/images/adminImg.JPG";
import ClubsImg from "../../assets/images/clubs.jpg";
import EntertainImg from "../../assets/images/entertainment.jpg";
import GalleryImg from "../../assets/images/gallery.jpg";

let features_items = [
  {
    fe_img: EventImg,
    fe_title: "Events",
    fe_link: "/events",
  },
  {
    fe_img: SportsImg,
    fe_title: "Sports & Activities",
    fe_link: "/events/sports",
  },
  {
    fe_img: AdminImg,
    fe_title: "Admin",
    fe_link: "/admin",
  },
  {
    fe_img: ClubsImg,
    fe_title: "Clubs & Societies",
    fe_link: "/events/clubs",
  },
  {
    fe_img: EntertainImg,
    fe_title: "Entertainment",
    fe_link: "/events/entertainment",
  },
  {
    fe_img: GalleryImg,
    fe_title: "Gallery",
    fe_link: "/events/gallery",
  },
];

export default features_items;
