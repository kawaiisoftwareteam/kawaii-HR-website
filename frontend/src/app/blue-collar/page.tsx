"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlueCollarPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/for-businesses#blue-collar");
  }, [router]);
  return null;
}
