const adminAuth = (res, res, next) => {
  console.log("Admin is getting checked");
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) res.status(401).send("Unauthorised Request");
  else next();
};

const userAuth = (res, res, next) => {
  console.log("Admin is getting checked");
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) res.status(401).send("Unauthorised Request");
  else next();
};

module.exports = {
  adminAuth,
  userAuth,
};
