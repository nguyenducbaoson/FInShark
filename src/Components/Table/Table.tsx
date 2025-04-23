import { testIncomeStatementData } from "./testData"

type Props = {
    config: any; 
    data: any;
}

const Table = (props: Props) => {
    const renderedRows = props.data.map((company: any) =>{
        return(
            <tr key={company.cik}>
                {props.config.map((val: any) => {
                    return <td className="p-3">{val.render(company)}</td>
                }) }

            </tr>
        )
    });
    const renderedHeader = props.config.map((configs: any) =>{
        return (
            <th className="p-4 text-left text-ts font-medium text-fray-500 uppercase tracking-wider" key={configs.label}>{configs.label}</th>
        )
    })
  return (
    <div className="bg=white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <table>
            <thead className="min-w-full divide-y divide=gray-200 m-5">{renderedHeader}</thead>
            <tbody>{renderedRows}</tbody>
        </table>
    </div>
  )
}

export default Table