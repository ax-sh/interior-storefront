import { PropsWithChildren } from "react";

export function PageHeader({ children }: PropsWithChildren) {
  return (
    <h1
      className={
        "font-bold float-right before:content-['the'] before:text-gray-500"
      }
    >
      {children}
    </h1>
  );
}
