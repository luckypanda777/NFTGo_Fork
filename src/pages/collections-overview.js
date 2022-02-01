import React, { useEffect, useState } from 'react'
import axios from 'axios'

const COverView = () => {
    const database_url = 'https://api.nftgo.io/api/v1/'
    
    async function getAllData() {
        try {
            const res = await axios.post('/ranking/collections', {
                offset: 0,
                limit: 10000,
                by: 'marketCap',
                interval: '24h',
                asc: -1,
                rarity: -1,
                fields: [
                    marketCap,
                    marketCapChange24h,
                    relMarketCap,
                    buyerNum24h,
                    buyerNum24hChange24h,
                    sellerNum24h,
                    sellerNum24hChange24h,
                    liquidity24h,
                    liquidity24hChange24h,
                    saleNum24h,
                    saleNum24hChange24h,
                    volume24h,
                    volume24hChange24h,
                    relVolume24h,
                    traderNum24h,
                    traderNum24hChange24h,
                    holderNum,
                    holderNumChange24h,
                    whaleNum,
                    whaleNumChange24h,
                    orderAvgPriceETH24h,
                    orderAvgPriceETH24hChange24h,
                    orderAvgPrice24h,
                    orderAvgPrice24hChange24h,
                    floorPrice,
                    floorPriceChange24h,
                    relMaxFloorPrice,
                    relMaxOrderAvgPrice24h,
                    relMaxLiquidity24h,
                    relMaxSaleNum,
                    relMaxSaleNum24h,
                    relMaxBuyerNum,
                    relMaxSellerNum,
                    relMaxWhaleNum,
                    relMaxTraderNum,
                    relMaxHolderNum,
                    relMaxTraderNum24h,
                    relMarketCap,
                    relMaxBuyerNum24h,
                    relMaxSellerNum24h,
                    blueChipHolderNum,
                    blueChipHolderNumChange24h,
                    blueChipHolderRatio,
                    whaleRatio,
                    relBlueChipHolderNum
                ]
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

}

export default COverView