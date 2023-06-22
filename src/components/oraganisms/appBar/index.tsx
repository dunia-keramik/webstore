import { BackIcon } from "../../atoms";

async function AppBar(props: { webstore: any; backIcon?: boolean }) {
  return (
    <div
      className={`flex shadow p-3 md:p-5 ${
        props.backIcon ? "justify-between px-2 md:px-10" : "justify-center"
      }`}
    >
      <div className={`${!props.backIcon ? "hidden" : ""}`}>
        <BackIcon />
      </div>
      <div>
        <p className="font-bold text-lg md:text-xl">
          {props.webstore && props.webstore?.nama_webstore}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default AppBar;
