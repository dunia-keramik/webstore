import { LuSquareDot } from "react-icons/lu";

export default function HeaderSection(props: { title: string }) {
  return (
    <p className="font-semibold flex items-center my-2">
      <LuSquareDot className="mr-1 text-gray-500" />
      {props.title}
    </p>
  );
}
