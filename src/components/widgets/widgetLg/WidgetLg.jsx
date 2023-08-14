import './widgetLg.css'

export const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Historique des transactions</span>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Clients</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Montant</th>
            <th className="widgetLgTh">Statut</th>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          {/*widgetLgTr */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Susan Carol"
                className="wdgetLgImg"
              />
              <span className="widgetLgUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ type }) => {
  const convertType = type => {
    switch (type) {
      case 'Approved':
        return 'Approvée'
      case 'Pending':
        return 'En attente'
      case 'Declined':
        return 'Réfusée'
      default:
        return ''
    }
  }

  return (
    <button className={`widgetLgButton ${type}`}>{`${convertType(
      type,
    )}`}</button>
  )
}
