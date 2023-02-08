/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TierV2,
  TierV2Interface,
} from "../../../../../@rainprotocol/rain-protocol/contracts/tier/TierV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "context",
        type: "uint256[]",
      },
    ],
    name: "report",
    outputs: [
      {
        internalType: "uint256",
        name: "report",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tier",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "context",
        type: "uint256[]",
      },
    ],
    name: "reportTimeForTier",
    outputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId_",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class TierV2__factory {
  static readonly abi = _abi;
  static createInterface(): TierV2Interface {
    return new utils.Interface(_abi) as TierV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TierV2 {
    return new Contract(address, _abi, signerOrProvider) as TierV2;
  }
}
