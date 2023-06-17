import { GetDataApi } from "@/src/utils";

async function AppBar() {
  const response = await GetDataApi(
    `${process.env.NEXT_PUBLIC_HOST}/webstore/domain/ikjewffi.netlify.app`
  );

  const webstore = response.data;

  return (
    <div className="flex justify-center items-center bg-slate-900 text-white p-3 md:p-5">
      <p className="font-bold text-lg md:text-xl">
        {webstore && webstore?.nama_webstore}
      </p>
    </div>
  );
}

export default AppBar;
