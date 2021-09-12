import "jest-styled-components";
import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { IIndexTitleProps } from "./IndexTitle";

import { IndexTitle } from "./index";

import FakeProvider from "__test/utils/FakeProvider";

describe("<IndexTitle>", () => {
  const clickHandler = jest.fn();
  const makeIndexTitle = (props: IIndexTitleProps) => {
    return render(
      <FakeProvider>
        <IndexTitle {...props} />
      </FakeProvider>
    );
  };

  it("withoutIndex props가 true라면 제목만 보여진다.", () => {
    const { getByText } = makeIndexTitle({
      title: "제목",
      withoutIndex: true,
    });

    getByText("제목");
  });

  const makeIndexTitleWithIndex = () =>
    makeIndexTitle({
      title: "제목",
      total: 13,
      clickHandler,
      onScreenCount: 3,
      selectedIndex: 0,
    });

  it("화면에 보여질 아이템의 가짓수, 전체 아이템의 가짓수를 통해 숫자가 결정되어 보여진다.", async () => {
    const { getByText, queryByText } = makeIndexTitleWithIndex();

    getByText("1");
    getByText("2");
    expect(queryByText("6")).toBeNull();
  });
  it("숫자를 클릭하면 clickHandler함수가 숫자의 index값을 인자로 받아 실행된다. - 두번쨰 버튼 클릭", () => {
    const { getByText } = makeIndexTitleWithIndex();

    const secondItem = getByText("2");
    fireEvent.click(secondItem);

    expect(clickHandler).toBeCalled();
    expect(clickHandler).toBeCalledWith(1);
  });
  it("숫자를 클릭하면 clickHandler함수가 숫자의 index값을 인자로 받아 실행된다. - 네번째 버튼 클릭", () => {
    const { getByText } = makeIndexTitleWithIndex();

    const forthItem = getByText("4");
    fireEvent.click(forthItem);

    expect(clickHandler).toBeCalled();
    expect(clickHandler).toBeCalledWith(3);
  });
  it("클릭된 숫자는 테투리를 가지고 있다.", () => {
    const { getByText } = makeIndexTitleWithIndex();

    const firstItem = getByText("1");
    const secondItem = getByText("2");

    const firstIndexWrapper = firstItem.parentElement;
    const secondIndexWrapper = secondItem.parentElement;
    expect(firstIndexWrapper).toHaveStyleRule("border", "0.2rem solid #836EFF");
    expect(secondIndexWrapper).not.toHaveStyleRule(
      "border",
      "0.2rem solid #836EFF"
    );
  });
});
