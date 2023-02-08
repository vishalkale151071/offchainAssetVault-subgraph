/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockChainlinkDataFeed,
  MockChainlinkDataFeedInterface,
} from "../../../contracts/test/MockChainlinkDataFeed";

const _abi = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "roundId_",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "roundId_",
        type: "uint80",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "answer",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "startedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "uint80",
            name: "answeredInRound",
            type: "uint80",
          },
        ],
        internalType: "struct RoundData",
        name: "roundData_",
        type: "tuple",
      },
    ],
    name: "setRoundData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "version_",
        type: "uint256",
      },
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061083f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637a1395aa116100765780639a6fc8f51161005b5780639a6fc8f514610152578063f4574909146101f2578063feaf968c1461020557600080fd5b80637a1395aa146100fd57806390c3f38f1461013f57600080fd5b8063313ce567146100a8578063408def1e146100c257806354fd4d50146100d75780637284e416146100e8575b600080fd5b60005460405160ff90911681526020015b60405180910390f35b6100d56100d03660046103b7565b600455565b005b6004546040519081526020016100b9565b6100f0610263565b6040516100b991906103d0565b6100d561010b36600461043c565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055565b6100d561014d366004610495565b6102f5565b6101bb610160366004610583565b69ffffffffffffffffffff818116600090815260026020818152604092839020835160808101855281548082526001830154938201849052938201549481018590526003909101549094166060909401849052939490939290565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100b9565b6100d561020036600461059e565b610305565b6003805469ffffffffffffffffffff90811660008181526002602081815260409283902083516080810185528154808252600183015493820184905293820154948101859052960154909416606090950185905291939192916101bb565b6060600180546102729061064d565b80601f016020809104026020016040519081016040528092919081815260200182805461029e9061064d565b80156102eb5780601f106102c0576101008083540402835291602001916102eb565b820191906000526020600020905b8154815290600101906020018083116102ce57829003601f168201915b5050505050905090565b600161030182826106ef565b5050565b69ffffffffffffffffffff8281166000818152600260208181526040928390208651815590860151600182015591850151908201556060840151600391820180547fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000016918516919091179055549091161015610301576003805469ffffffffffffffffffff84167fffffffffffffffffffffffffffffffffffffffffffff000000000000000000009091161790555050565b6000602082840312156103c957600080fd5b5035919050565b600060208083528351808285015260005b818110156103fd578581018301518582016040015282016103e1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60006020828403121561044e57600080fd5b813560ff8116811461045f57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156104a757600080fd5b813567ffffffffffffffff808211156104bf57600080fd5b818401915084601f8301126104d357600080fd5b8135818111156104e5576104e5610466565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561052b5761052b610466565b8160405282815287602084870101111561054457600080fd5b826020860160208301376000928101602001929092525095945050505050565b803569ffffffffffffffffffff8116811461057e57600080fd5b919050565b60006020828403121561059557600080fd5b61045f82610564565b60008082840360a08112156105b257600080fd5b6105bb84610564565b925060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156105ed57600080fd5b506040516080810181811067ffffffffffffffff8211171561061157610611610466565b806040525060208401358152604084013560208201526060840135604082015261063d60808501610564565b6060820152809150509250929050565b600181811c9082168061066157607f821691505b60208210810361069a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f8211156106ea57600081815260208120601f850160051c810160208610156106c75750805b601f850160051c820191505b818110156106e6578281556001016106d3565b5050505b505050565b815167ffffffffffffffff81111561070957610709610466565b61071d81610717845461064d565b846106a0565b602080601f831160018114610770576000841561073a5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556106e6565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156107bd5788860151825594840194600190910190840161079e565b50858210156107f957878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220d06b9b983211f2e411d3e38b455a3d5dc9cbdaa946aeecab118579f599ad930664736f6c63430008110033";

type MockChainlinkDataFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockChainlinkDataFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockChainlinkDataFeed__factory extends ContractFactory {
  constructor(...args: MockChainlinkDataFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockChainlinkDataFeed> {
    return super.deploy(overrides || {}) as Promise<MockChainlinkDataFeed>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockChainlinkDataFeed {
    return super.attach(address) as MockChainlinkDataFeed;
  }
  override connect(signer: Signer): MockChainlinkDataFeed__factory {
    return super.connect(signer) as MockChainlinkDataFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockChainlinkDataFeedInterface {
    return new utils.Interface(_abi) as MockChainlinkDataFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChainlinkDataFeed {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockChainlinkDataFeed;
  }
}
