"use client";

import { RecoilRoot } from "recoil";
// export const todoListState = atom({
//   key: "TodoList",
//   default: [],
// });

export default function RecoilContextProvider( {children}) {
  return (
            <RecoilRoot>
                {children}
            </RecoilRoot> 
        )
}