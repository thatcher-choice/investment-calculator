import {calculateInvestmentResults, formatter} from '../util/investment.js'
export default function OutputList({inputData}) {
    console.log(inputData, 'input');
    const resData = calculateInvestmentResults(inputData);
    console.log(resData);
    const initialInvestment = resData[0].valueEndOfYear - resData[0].interest - resData[0].annualInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Total Interest(Year)</th>
                <th>Investment Capital</th>
                <th>Amount Invested</th>
            </tr>
        </thead>
        <tbody>
            {resData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year - initialInvestment;
                const amountInvested = yearData.valueEndOfYear - totalInterest
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(amountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}