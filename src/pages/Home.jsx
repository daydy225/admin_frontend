import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo'
import { expenseData } from '../assets/data/expenseData'
import { Chart } from '../components/chart/Chart'
import { WidgetSm } from '../components/widgets/widgetSm/WidgetSm'
import { WidgetLg } from '../components/widgets/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        data={expenseData}
        title="Dépenses en francs CFA"
        grid={false}
        dataKey="Dépenses"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
