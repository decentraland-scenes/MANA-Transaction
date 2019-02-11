## Mana transaction

A simple scene that uses the MANA smart contract and the EthConnect library to send the user an amount of MANA on the Ropsten test network.


[Explore the scene](https://mana-transaction-sxjmryeayj.now.sh): this link takes you to a copy of the scene deployed to a remote server where you can interact with it just as if you were running `dcl start` locally.

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).


**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

_from the scene directory:_

```
$:  dcl start
```

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

**Usage**

> IMPORTANT: You need to set Metamask to use the Ropsten test network before using the scene.

Click on the cube to trigger a transaction. Metamask should then ask for your validation that you agree to the transaction. MANA is then sent to your account.

Learn more about how to use blockchain in your scenes in [Blockchain operations](https://docs.decentraland.org/blockchain-interactions/scene-blockchain-operations/) in our docs site.


## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.