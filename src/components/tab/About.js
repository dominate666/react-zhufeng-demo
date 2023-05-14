import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
export default function About() {
  //   let [params] = useSearchParams();
  let params = useParams();
  //   let id = params.get("id");
  let id = params.id;
  console.log("id", id);
  return <div>About</div>;
}
