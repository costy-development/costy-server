import { Async, API_Features } from "../../lib";
import { User } from "../../models";

export const getUsers = Async(async (req, res, next) => {
  const query = new API_Features(
    User.find({ role: { $ne: "MANAGER" } }),
    req.query as { [key: string]: string }
  );

  const users = await query.paginate().filterUsers().sort().getQuery();
  const { currentPage, pagesCount } = await query.countDocuments();

  res
    .status(200)
    .json({ data: users, currentPage, hasMore: currentPage < pagesCount });
});
