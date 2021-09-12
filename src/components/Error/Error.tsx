import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import {
  ErrorWrapper,
  ErrorContainer,
  ErrorHeader,
  ErrorDesc,
  ErrorText,
  ErrorButton,
} from "./Error.style";

import { ErrorPageProps } from "pages/_error";

const Error: React.FC<ErrorPageProps> = ({ statusCode }) => {
  const router = useRouter();
  const { t } = useTranslation("error");
  return (
    <ErrorWrapper>
      <ErrorContainer>
        <ErrorHeader>
          {statusCode === 404 ? "404 Error" : "500 Error"}
        </ErrorHeader>
        <ErrorDesc>
          {statusCode === 404
            ? t("error_desc_404")
                .split("\n")
                .map((text, idx) => <ErrorText key={idx}>{text}</ErrorText>)
            : t("error_desc_500")
                .split("\n")
                .map((text, idx) => <ErrorText key={idx}>{text}</ErrorText>)}
        </ErrorDesc>
        <ErrorButton type="button" onClick={() => router.push("/")}>
          {t("error_button")}
        </ErrorButton>
      </ErrorContainer>
    </ErrorWrapper>
  );
};

export default Error;
