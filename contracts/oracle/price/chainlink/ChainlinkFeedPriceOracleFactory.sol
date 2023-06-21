// SPDX-License-Identifier: MIT
pragma solidity =0.8.17;

import {Factory} from "@rainprotocol/rain-protocol/contracts/factory/Factory.sol";
import "./ChainlinkFeedPriceOracle.sol";

/// @title ChainlinkFeedPriceOracleFactory
/// @notice Factory for creating and deploying `ChainlinkFeedPriceOracle`.
contract ChainlinkFeedPriceOracleFactory is Factory {
    /// @inheritdoc Factory
    function _createChild(
        bytes memory data_
    ) internal virtual override returns (address) {
        // This is built directly with `new` instead of cloning as we're
        // optimizing for use of cheap immutables at runtime rather than cheap
        // deployments.
        return
            address(
                new ChainlinkFeedPriceOracle(
                    abi.decode(data_, (ChainlinkFeedPriceOracleConfig))
                )
            );
    }

    /// Typed wrapper for `createChild`.
    /// Use original `Factory` `createChild` function signature if function
    /// parameters are already encoded.
    ///
    /// @param config_ configuration for the oracle.
    /// @return New `ChainlinkFeedPriceOracle` child contract address.
    function createChildTyped(
        ChainlinkFeedPriceOracleConfig memory config_
    ) external returns (ChainlinkFeedPriceOracle) {
        return ChainlinkFeedPriceOracle(createChild(abi.encode(config_)));
    }
}
