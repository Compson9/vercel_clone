"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlock1() {
  const code =   `
  export default function (){
  return(
  <>
      <h1>Users</h1>
  <ul>
      {data.map(user => (
         <li key={user.id}>
        user.name
        </li>
         ) )}
    </ul>
  </>
  
  )
  
  }
  `;

  return (
    <div className="w-[422px] mx-auto ">
      <CodeBlock
        language="tsx"
        filename="app/user/page.tsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
