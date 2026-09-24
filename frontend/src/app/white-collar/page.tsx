"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WhiteCollarPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/for-businesses#white-collar");
  }, [router]);
  return null;
}
