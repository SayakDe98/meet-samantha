import SvgIcon from "@material-ui/core/SvgIcon";
import styles from "./TopBarIcon.module.css";
import { useNavigate } from "react-router-dom";

function TopBarIcon() {
  const navigate = useNavigate();

  return (
    <SvgIcon
      onClick={() => navigate("/")}
      className={styles.svgIcon}
      viewBox="0 0 477.867 477.867"
      xmlns="ttp://www.w3.org/2000/svg"
      y="0px"
      // style={{fontSize: 55}}
      style={{ fontSize: 80, cursor: "pointer"}}
    >
      {/* <svg
        id="header-img"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        y="0px"
        viewBox="0 0 477.867 477.867"
      > */}
      <g>
        <g>
          <g>
            <path
              d="M375.467,136.533c-53.333,0-110.933,51.661-136.533,77.534c-25.6-25.873-83.2-77.534-136.533-77.534    c-64.119,0-102.4,38.281-102.4,102.4s38.281,102.4,102.4,102.4c53.333,0,110.933-51.661,136.533-77.534    c25.6,25.873,83.2,77.534,136.533,77.534c64.12,0,102.4-38.281,102.4-102.4S439.586,136.533,375.467,136.533z M102.4,307.2    c-45.295,0-68.267-22.972-68.267-68.267s22.972-68.267,68.267-68.267c37.547,0,87.381,42.308,113.118,68.267    C189.833,264.926,140.1,307.2,102.4,307.2z M375.467,307.2c-37.547,0-87.381-42.308-113.118-68.267    c25.6-25.975,75.418-68.267,113.118-68.267c45.295,0,68.267,22.972,68.267,68.267S420.762,307.2,375.467,307.2z"
              data-original="#000000"
              data-old_color="#000000"
              fill="#EE3E01"
            />
          </g>
        </g>
      </g>{" "}
      {/* </svg> */}
    </SvgIcon>
  );
}

export default TopBarIcon;
