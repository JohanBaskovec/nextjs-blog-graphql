import {useRouter} from "next/router";
import ArticleFull from "../../components/ArticleFull.js";
import React from "react";

export default function Article(props) {
  const router = useRouter();
  const {id} = router.query;
  if (id == null) {
    return <></>
  }
  return <ArticleFull id={id} />
}
