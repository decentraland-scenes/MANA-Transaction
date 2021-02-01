## Mana transaction

A simple scene that uses the MANA smart contract and the EthConnect library to send the user an amount of MANA on the Ropsten test network.

This scene shows you:
- How to import a smart contract
- How to use the Eth-Connect library to call functions on a smart contrct

> Note: This scene uses the MANA contract as an example that can be applied to any other contract. If all you want to do is send a MANA, you might prefer to look at this simpler scene, that presents an easier way to achieve the same: [Paid Button](https://github.com/decentraland-scenes/Paid-Button).


## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.


Paste the following to the end of the URL in the browser window:

`&ENABLE_WEB3`
For example, if the URL is http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL, make it http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL&ENABLE_WEB3

> Note: When running a preview of a scene that uses one of the ethereum libraries, you must have Metamask or Dapper open and you must add this string.




**Scene Usage**

> IMPORTANT: You can test this scene in Ropsten testnet to aviod paying real MANA and Ether for the gas fee. To do so, simply set your Metamask network from Mainnet to Ropsten and reload the scene.

Click on the cube to trigger a transaction. Metamask should then ask for your validation that you agree to the transaction. MANA is then sent to your account.

Learn more about how to use blockchain in your scenes in [Blockchain operations](https://docs.decentraland.org/blockchain-interactions/scene-blockchain-operations/) in our docs site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).



## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
