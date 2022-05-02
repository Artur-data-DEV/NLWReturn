import { ButtonProps } from "../interfaces/ButtonProps";

export function Button(props: ButtonProps) {
  return (
    <button className="bg-violet-500 p-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">
      {props.text ?? "N/A"}
    </button>
  );
}

