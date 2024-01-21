import { Async, AppError, Email } from "../../lib";

export const sendTemplateOne = Async(async (req, res, next) => {
  const { title, subTitle, message, emails, isSelectedAll } = req.body;

  if (!Array.isArray(emails) || (!emails[0] && !isSelectedAll))
    return next(new AppError(400, "Please select recipients"));
  else if (!title || !subTitle || !message)
    return next(new AppError(400, "Please fill up the template"));

  await Email.sendBatchedCustomEmails(emails, {
    subject: "",
    template: "email/templateOne",
    title,
    subTitle,
    text: message,
  });

  res.status(201).json("emails are processing");
});

export const sendTemplateTwo = Async(async (req, res, next) => {
  const { title, titleSecondary, subTitle, message, emails, isSelectedAll } =
    req.body;

  if (!Array.isArray(emails) || (!emails[0] && !isSelectedAll))
    return next(new AppError(400, "Please select recipients"));
  else if (!title || !titleSecondary || !subTitle || !message)
    return next(new AppError(400, "Please fill up the template"));

  await Email.sendBatchedCustomEmails(emails, {
    subject: "",
    template: "email/templateTwo",
    title,
    titleSecondary,
    subTitle,
    text: message,
  });

  res.status(201).json("emails are processing");
});

export const sendTemplateThree = Async(async (req, res, next) => {
  const { title, list, emails, isSelectedAll } = req.body;

  if (!Array.isArray(emails) || (!emails[0] && !isSelectedAll))
    return next(new AppError(400, "Please select recipients"));
  else if (!title || !Array.isArray(list) || !list[0])
    return next(new AppError(400, "Please fill up the template"));

  await Email.sendBatchedCustomEmails(emails, {
    subject: "",
    template: "email/templateThree",
    title,
    list,
  });

  res.status(201).json("emails are processing");
});

export const sendTemplateFour = Async(async (req, res, next) => {
  const { title, emails, isSelectedAll } = req.body;

  if (!Array.isArray(emails) || (!emails[0] && !isSelectedAll))
    return next(new AppError(400, "Please select recipients"));
  else if (!title)
    return next(new AppError(400, "Please fill up the template"));

  await Email.sendBatchedCustomEmails(emails, {
    subject: "",
    template: "email/templateFour",
    title,
  });

  res.status(201).json("emails are processing");
});
