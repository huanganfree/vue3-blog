/**
 * 校验用户
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const auth = (req, res, next) => {
  const userName = req.session.username;
  console.log('req.session-auth-==', req.session);
  if (userName) {
    next();
  } else {
    res.json({
      code: 401,
      message: '登录失效，请重新登录'
    })
    next('router')
  }
}

module.exports = {
  auth
}