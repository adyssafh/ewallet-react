import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import { useState } from 'react';


function Home(){
    const [hideBalance, setHideBalance] = useState(false);
    const transactions = [
        {id: 1, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Sendy", desc: "Fore Coffee", amount:"- Rp75.000,00"},
        {id: 2, datetime: "20:10 - 30 June 2022", type: "Top Up", fromto: "", desc: "Top Up from Bank Transfer", amount:"+ Rp1.000.000,00"},
        {id: 3, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Spongebob", desc: "Fore Coffee", amount:"- Rp75.000,00"},
        {id: 4, datetime: "20:10 - 30 June 2022", type: "Top Up", fromto: "", desc: "Top Up from Bank Transfer", amount:"+ Rp1.000.000,00"},
        {id: 5, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Anwar", desc: "Beli Barang", amount:"- Rp75.000,00"},
        {id: 6, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Joko", desc: "Transfer", amount:"+ Rp1.000.000,00"},
        {id: 7, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Joko", desc: "Fore Coffee", amount:"- Rp75.000,00"},
        {id: 8, datetime: "20:10 - 30 June 2022", type: "Top Up", fromto: "", desc: "Top Up from Bank Transfer", amount:"+ Rp1.000.000,00"},
        {id: 9, datetime: "20:10 - 30 June 2022", type: "Transfer", fromto: "Joko", desc: "Fore Coffee", amount:"- Rp75.000,00"},
        {id: 10, datetime: "20:10 - 30 June 2022", type: "Top Up", fromto: "", desc: "Top Up from Bank Transfer", amount:"+ Rp1.000.000,00"},
    ]

    return(
        <div className="home-page">
            <div className="welcome">
                <div>
                    <p className="title">Good Morning, Neneyyy</p>
                    <p className="subtitle">Check all your incoming and outgoing transactions here</p>
                </div>

                <div className="account">
                    <img className="photo" src="./src/assets/Neney.jpeg" alt="Neney" />
                    <div className="name">
                        <p className="textbold">Neney binti Owi</p>
                        <p className="text">Personal Account</p>
                    </div>
                </div>
            </div> 

            <div className="dashboard">
                <div class="accountNo">
                    <p class="dash-title">Account No.</p>
                    <p class="dash-body">100899</p>
                </div>

            <div class="balance">
                <div class="balance-num">
                    <div class="balance-text">
                        <p class="dash-title-black">Balance</p>
                    </div>
                    <div class="balance-amount">
                        <p class="dash-body-black">{hideBalance ? "*************" : "Rp. 10.000.000"}</p>
                        <button onClick={ () => setHideBalance(!hideBalance)}>
                            <img class="view-icon" src="./src/assets/view 1.svg" />
                        </button>
                    </div>
                </div>
                <div class="balance-button">
                    <div class="plus-icon">
                        <img class="plus" src="./src/assets/plus.svg" />
                    </div>
                    <div class="share-icon">
                        <img class="share" src="./src/assets/share.svg"/>
                    </div>
                </div>
            </div>
            </div>

            <div className="flex justify-between items-center mt-6 p-4 rounded-lg">
                <input type="text" placeholder="Search" className="p-3 border rounded-lg w-1/3 shadow-sm focus:outline-none" />
                <div className="flex gap-4 items-center">
                    <label className="text-gray-500">Show</label>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Last 10 transactions</option>
                        <option>Last 20 transactions</option>
                    </select>
                    <label className="text-gray-500">Sort by</label>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Date</option>
                        <option>Amount</option>
                    </select>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Descending</option>
                        <option>Ascending</option>
                    </select>
                </div>
            </div>

            <div className="mt-6 bg-white shadow-md rounded-lg p-4">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                    <th className="p-2">Date & Time</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">From / To</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                    <tr className="border-b" key={transaction.id}>
                        <td className="p-2">{transaction.datetime}</td>
                        <td className="p-2">{transaction.type}</td>
                        <td className="p-2">{transaction.fromto}</td>
                        <td className="p-2">{transaction.desc}</td>
                        <td className={`p-2 ${transaction.amount.includes("-") ? "text-black" : "text-green-500"}`}>{transaction.amount}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className="flex justify-start items-center mt-6 border rounded-lg w-fit mx-auto overflow-hidden">
                <button className="px-4 py-2 bg-gray-200 text-gray-500 cursor-not-allowed">First</button>
                <button className="px-4 py-2 bg-white border-x text-[#0061FF] font-bold">1</button>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold">2</button>
                <button className="px-4 py-2 bg-white border-x text-[#0061FF] font-bold">3</button>
                <button className="px-4 py-2 bg-white text-[#0061FF] font-bold">Next</button>
            </div>
        </div>
        
    )
}

export default Home;