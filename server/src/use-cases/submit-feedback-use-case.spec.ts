import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);
describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "test",
        screenshot: "data:image/png;base64,asd2asdas56d1as56d"
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
  it("should not be able to submit feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "asdasd",
        screenshot: "data:image/png;base64,asd2asdas56d1as56d"
      })
    ).rejects.toThrow();
  });
  it("should not be able to submit feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,asd2asdas56d1as56d"
      })
    ).rejects.toThrow();
  });
  it("should not be able to submit feedback with an invalid screenshot format", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "asdasd",
        screenshot: "img.jpg"
      })
    ).rejects.toThrow();
  });
});
