const fsPromises =  require("fs").promises;
const path = require('path');
const cliProgress = require('cli-progress')

const tickersDir = path.resolve(__dirname,'tickers')
const sleep = (duration) => new Promise((resolve) => setTimeout(resolve,duration))

const markets = ['AMEX','NASDAQ','NYSE']
async function parseTickers(market){
  const data = await fsPromises.readFile(
    path.join(tickersDir,`${market}.txt`),'utf8'
    )
  const lines = data.split('\n')
  const tickers = lines
  .map((line)=>line.split('\t')[0])
  .filter((ticker) => !ticker.includes('.'))
  return tickers;
}
async function BulkSynchronize(){
  const tickersGroup = await Promise.all(markets.map(parseTickers))
  const tickers = [].concat(...tickersGroup)
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
  bar.start(tickers.length, 0)

  for (let i = 0; i < tickers.length; i += 1) {

    // await sleep(3000)
    bar.update(i + 1)
  }

  console.log(tickers);
}

BulkSynchronize();