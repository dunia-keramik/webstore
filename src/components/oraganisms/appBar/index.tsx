import { GetDataApi } from "@/src/utils";
import { BackIcon } from "../../atoms";

async function AppBar(props: { backIcon?: boolean }) {
  const response = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/webstore/domain/ikjewffi.netlify.app`
  );

  const webstore = response.data;

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
          {webstore && webstore?.nama_webstore}
        </p>
      </div>
    </div>
  );
}

export default AppBar;
