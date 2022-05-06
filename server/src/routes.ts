import express from "express";
import { NodemailerMailAdapter } from "./adaptors/nodemailer/nodemailer-mail-adapter";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUsecase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );
  const feedback = await prisma.feedback.create({
    data: { type: type, comment: comment, screenshot: screenshot }
  });

  await submitFeedbackUsecase.execute({ type, comment, screenshot });

  return res.status(201).send(feedback);
});
