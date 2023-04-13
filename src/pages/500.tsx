import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom500() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });
}
