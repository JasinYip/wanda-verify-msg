const app = require('express')()

app.listen('2048')

app.get('/', (req, res) => {
 const msg = `欢迎你的申请！请按以下步骤验证你的余额：
1、向你的一个地址转 1000${(''+Math.random()).substr(0, 8)} 枚 ADA；
2、转账完成后，回复交易 ID。` 

  res.end(msg)
})