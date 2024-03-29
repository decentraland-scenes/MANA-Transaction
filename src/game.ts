import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import * as EthConnect from 'eth-connect'
import { abi } from './abi/fakeMANA'

// function to send mana
function sendMana() {
  executeTask(async () => {
    try {
      const provider = await getProvider()
      const requestManager = new EthConnect.RequestManager(provider)
      const factory = new EthConnect.ContractFactory(requestManager, abi)
      const contract = (await factory.at(
        '0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb'
      )) as any
      const address = await getUserAccount()
      log(address)
      const res = await contract.setBalance(
        '0xaFA48Fad27C7cAB28dC6E970E4BFda7F7c8D60Fb',
        100,
        {
          from: address
        }
      )
      log(res)
    } catch (error) {
      log(error.toString())
    }
  }).catch((error) => log(error))
}

// button
const button = new Entity()
button.addComponent(new BoxShape())
button.addComponent(
  new Transform({
    position: new Vector3(3, 1, 3)
  })
)
button.addComponent(
  new OnPointerDown(
    (e) => {
      sendMana()
    },
    { button: ActionButton.POINTER, hoverText: 'Get MANA!' }
  )
)
engine.addEntity(button)

// text labels over button
const sign = new Entity()
sign.addComponent(
  new Transform({
    position: new Vector3(3, 2, 3)
  })
)
const t = new TextShape('Click to get your FREE MANA!')
t.fontSize = 3
t.color = Color3.Black()
sign.addComponent(t)
//sign.addComponent(new Billboard(true, false, false))
engine.addEntity(sign)

const smallPrint = new Entity()
smallPrint.addComponent(
  new Transform({
    position: new Vector3(3, 1.8, 3)
  })
)
const ts = new TextShape('(In Ropsten network)')
ts.fontSize = 1
ts.color = Color3.Black()
smallPrint.addComponent(ts)
//smallPrint.addComponent(new Billboard(true, false, false))

engine.addEntity(smallPrint)
