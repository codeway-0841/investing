const fsPromises =  require("fs").promises;
const path = require('path');

const tickersDir = path.resolve(__dirname,'tickers')

async function BulkSynchronize(type){
  const data = await fsPromises.readFile(
    path.join(tickersDir,`${type}.txt`),'utf8'
    )
  const lines = data.split('\n')
  const tickers = lines
  .map((line)=>line
  .split('\t')[0])

  console.log(tickers);
}

BulkSynchronize('NYSE'); 