/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type ReceiptVaultFactoryConfigStruct = {
  implementation: PromiseOrValue<string>;
  receiptFactory: PromiseOrValue<string>;
};

export type ReceiptVaultFactoryConfigStructOutput = [string, string] & {
  implementation: string;
  receiptFactory: string;
};

export type VaultConfigStruct = {
  asset: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  symbol: PromiseOrValue<string>;
};

export type VaultConfigStructOutput = [string, string, string] & {
  asset: string;
  name: string;
  symbol: string;
};

export type OffchainAssetVaultConfigStruct = {
  admin: PromiseOrValue<string>;
  vaultConfig: VaultConfigStruct;
};

export type OffchainAssetVaultConfigStructOutput = [
  string,
  VaultConfigStructOutput
] & { admin: string; vaultConfig: VaultConfigStructOutput };

export interface OffchainAssetReceiptVaultFactoryInterface
  extends utils.Interface {
  functions: {
    "createChild(bytes)": FunctionFragment;
    "createChildTyped((address,(address,string,string)))": FunctionFragment;
    "implementation()": FunctionFragment;
    "isChild(address)": FunctionFragment;
    "receiptFactory()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createChild"
      | "createChildTyped"
      | "implementation"
      | "isChild"
      | "receiptFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createChild",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createChildTyped",
    values: [OffchainAssetVaultConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isChild",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiptFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createChildTyped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiptFactory",
    data: BytesLike
  ): Result;

  events: {
    "Construction(address,tuple)": EventFragment;
    "Implementation(address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewChild(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Construction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Implementation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewChild"): EventFragment;
}

export interface ConstructionEventObject {
  sender: string;
  config: ReceiptVaultFactoryConfigStructOutput;
}
export type ConstructionEvent = TypedEvent<
  [string, ReceiptVaultFactoryConfigStructOutput],
  ConstructionEventObject
>;

export type ConstructionEventFilter = TypedEventFilter<ConstructionEvent>;

export interface ImplementationEventObject {
  sender: string;
  implementation: string;
}
export type ImplementationEvent = TypedEvent<
  [string, string],
  ImplementationEventObject
>;

export type ImplementationEventFilter = TypedEventFilter<ImplementationEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewChildEventObject {
  sender: string;
  child: string;
}
export type NewChildEvent = TypedEvent<[string, string], NewChildEventObject>;

export type NewChildEventFilter = TypedEventFilter<NewChildEvent>;

export interface OffchainAssetReceiptVaultFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OffchainAssetReceiptVaultFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createChildTyped(
      offchainAssetVaultConfig_: OffchainAssetVaultConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiptFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  createChild(
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createChildTyped(
    offchainAssetVaultConfig_: OffchainAssetVaultConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isChild(
    maybeChild_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiptFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    createChildTyped(
      offchainAssetVaultConfig_: OffchainAssetVaultConfigStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiptFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Construction(address,tuple)"(
      sender?: null,
      config?: null
    ): ConstructionEventFilter;
    Construction(sender?: null, config?: null): ConstructionEventFilter;

    "Implementation(address,address)"(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;
    Implementation(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewChild(address,address)"(
      sender?: null,
      child?: null
    ): NewChildEventFilter;
    NewChild(sender?: null, child?: null): NewChildEventFilter;
  };

  estimateGas: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createChildTyped(
      offchainAssetVaultConfig_: OffchainAssetVaultConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiptFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createChildTyped(
      offchainAssetVaultConfig_: OffchainAssetVaultConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiptFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
