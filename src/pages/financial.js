// src/pages/financialManagement.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Pie } from 'react-chartjs-2';
import Navbar from '../components/Navbar';

export default function FinancialManagement() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/loginpage'); // Redirect to login if not logged in
        }
    }, [router]);

    // Hardcoded data for demonstration purposes
    const expenses = [
        { category: 'Fertilizers', amount: 5000 },
        { category: 'Pesticides', amount: 3000 },
        { category: 'Seeds', amount: 2000 },
        { category: 'Labor', amount: 4000 },
    ];

    const revenue = [
        { crop: 'Wheat', amount: 25000 },
        { crop: 'Rice', amount: 15000 },
        { crop: 'Cotton', amount: 5000 },
        { crop: 'Sugarcane', amount: 10000 },
    ];

    const loans = [
        { loanType: 'Crop Loan', amount: 10000, interestRate: 5, dueDate: '2025-06-15' },
        { loanType: 'Equipment Loan', amount: 20000, interestRate: 7, dueDate: '2025-12-01' },
    ];

    // Calculate total expenses, revenue, and loan payments
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const totalRevenue = revenue.reduce((sum, rev) => sum + rev.amount, 0);
    const totalLoans = loans.reduce((sum, loan) => sum + loan.amount, 0);

    // Prepare data for the Pie chart (Revenue Share by Crop)
    const pieChartData = {
        labels: revenue.map((rev) => rev.crop), // Crop names
        datasets: [
            {
                data: revenue.map((rev) => rev.amount), // Amount for each crop
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'], // Pie chart colors
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'], // Hover colors
            },
        ],
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Financial Management</h2>
                
                {/* Expense Tracking */}
                <div className="section">
                    <h3>Expense Tracking</h3>
                    <ul className="video-box">
                        {expenses.map((expense, index) => (
                            <li key={index}>
                                {expense.category}: ₹{expense.amount}
                            </li>
                        ))}
                    </ul>
                    <h4>Total Expenses: ₹{totalExpenses}</h4>
                    <hr></hr>
                </div>

                {/* Revenue Tracking */}
                <div className="section">
                    <h3>Revenue Tracking</h3>
                    <ul className="video-box">
                        {revenue.map((rev, index) => (
                            <li key={index}>
                                {rev.crop}: ₹{rev.amount}
                            </li>
                        ))}
                    </ul>
                    <h4>Total Revenue: ₹{totalRevenue}</h4>
                    <hr></hr>
                </div>

                {/* Loan Management */}
                <div className="section">
                    <h3>Loan Management</h3>
                    <ul className="video-box">
                        {loans.map((loan, index) => (
                            <li key={index}>
                                {loan.loanType}: ₹{loan.amount} at {loan.interestRate}% interest. Due date: {loan.dueDate}
                            </li>
                        ))}
                    </ul>
                    <h4>Total Loan Amount: ₹{totalLoans}</h4>
                    <hr></hr>
                </div>
                
                {/* Profit Calculation */}
                <div className="section">
                    <h3>Profit Calculation</h3>
                    <h4>Net Profit: ₹{totalRevenue - totalExpenses}</h4>
                </div>

                {/* Revenue Share Pie Chart */}
                <div className="section">
                    <h3>Revenue Share by Crop</h3>
                    <Pie className='image-box' data={pieChartData} />
                    <h4 className="video-box">You earned {((revenue[0].amount / totalRevenue) * 100).toFixed(2)}% this year from {revenue[0].crop}!</h4>
                    <h4 className="video-box">You earned {((revenue[1].amount / totalRevenue) * 100).toFixed(2)}% this year from {revenue[1].crop}!</h4>
                    <h4 className="video-box">You earned {((revenue[2].amount / totalRevenue) * 100).toFixed(2)}% this year from {revenue[2].crop}!</h4>
                    <h4 className="video-box">You earned {((revenue[3].amount / totalRevenue) * 100).toFixed(2)}% this year from {revenue[3].crop}!</h4>
                </div>
            </div>
        </div>
    );
}
