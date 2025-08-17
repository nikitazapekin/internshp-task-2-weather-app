import Button from "@components/Button";

describe("Button Component", () => {
  const buttonText = "Click me";
  let mockHandler;

  beforeEach(() => {
    mockHandler = cy.stub().as("clickHandler");
    cy.mount(
      <Button text={buttonText} handler={mockHandler} isActive={true} isFullWidth={false} />
    );
  });

  it("should render with correct text", () => {
    cy.get("button").should("contain", buttonText);
  });

  it("should call handler when clicked", () => {
    cy.get("button").click();
    cy.get("@clickHandler").should("have.been.calledOnce");
  });

  it("should have active styles when isActive is true", () => {
    cy.get("button").should("have.class", "active");
  });

  it("should have full width styles when isFullWidth is true", () => {
    mockHandler = cy.stub().as("clickHandler");
    cy.mount(<Button text={buttonText} handler={mockHandler} isActive={true} isFullWidth={true} />);
    cy.get("button").should("have.class", "fullWidth");
  });
});
