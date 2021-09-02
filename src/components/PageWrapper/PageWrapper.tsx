import { Wrapper } from "./PageWrapper.style";

interface PageWrapperProps {
  children: JSX.Element;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
