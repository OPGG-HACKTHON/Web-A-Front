import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

import { updateLocale } from "lib/customAxios";

const LocaleProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    updateLocale(locale);
  }, [locale]);

  return <>{children}</>;
};

export default LocaleProvider;
