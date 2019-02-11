import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import * as EthConnect from '../node_modules/eth-connect/esm'
import { abi } from './abi/fakeMANA';

// function to send mana
function sendMana(){
  executeTask(async () => {
    try {
      const provider = await getProvider()
      const requestManager = new EthConnect.RequestManager(provider)
      const factory = new EthConnect.ContractFactory(requestManager, abi)
      const contract = (await factory.at('0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb')) as any
      const address = await getUserAccount()
      log(address)
      const res = await contract.setBalance('0xaFA48Fad27C7cAB28dC6E970E4BFda7F7c8D60Fb', 100, {
        from: address
      })
      log(res)
    } catch (error) {
      log(error.toString())
    }
  })
}




// button
let button = new Entity()
button.add(new BoxShape())
button.add(new Transform({
  position: new Vector3( 3, 1, 3)
}))
button.add(new OnClick(e=>{
  sendMana()
}))
engine.addEntity(button)


// text labels over button
let sign = new Entity()
sign.add(new Transform({
  position: new Vector3( 3, 2, 3)
}))
let t = new TextShape("Click to get your FREE MANA!")
t.textWrapping = true
sign.add(t)
//sign.add(new Billboard(true, false, false))
engine.addEntity(sign)


let smallPrint = new Entity()
smallPrint.add(new Transform({
  position: new Vector3( 3, 1.6, 3)
}))
let ts = new TextShape("(In Ropsten network)")
ts.textWrapping = true
ts.fontSize = 25
smallPrint.add(ts)
//smallPrint.add(new Billboard(true, false, false))

engine.addEntity(smallPrint)