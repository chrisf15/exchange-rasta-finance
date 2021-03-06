import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Wallet(props) {
    return (
        <div>
            <Link to={props.farmWalletLink === undefined ? "/" : props.farmWalletLink} className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl">
                <FaIcons.FaWallet/>
                <span>Unlock Wallet</span>
            </Link>
        </div>
    )
}
