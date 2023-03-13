import { Link } from "react-router-dom";
import { IconHome, IconSchool, IconNews, IconAward } from "@tabler/icons-react";
import { NavLink, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";

// simple React function for banner
function Banner(props) {
  let w = document.documentElement.clientWidth || window.innerWidth;
  let mobile = w > 480 ? false : true;

  const icons = [IconHome, IconNews, IconSchool, IconAward];

  let pages = [
    { name: "Homepage", path: "/" },
    { name: "Research & teaching", path: "/research" },
    { name: "Resume", path: "/resume" },
    { name: "Awards", path: "/awards" },
  ];

  const location = useLocation();

  return (
    <div className="Banner">
      {pages.map((page) => {
        const Icon = icons[pages.indexOf(page)];
        return (
          <Link
            onClick={() => {
              if (mobile) {
                props.close();
              }
            }}
            to={page.path}
            style={{ textDecoration: "none" }}
          >
            <NavLink
              label={<Text size={"lg"}>{page.name}</Text>}
              icon={<Icon size={25} />}
              active={
                location.pathname.slice(location.pathname.lastIndexOf("/")) ===
                page.path
              }
            />
          </Link>
        );
      })}
    </div>
  );
}
export default Banner;
