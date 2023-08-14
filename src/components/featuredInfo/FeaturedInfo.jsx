import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      {/* Featured Item */}
      <div className="featuredItem">
        <span className="featuredTitle">Dépense</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25 M fcfa</span>
          <span className="featuredMoneyRate">
            -14 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
      {/* Featured Item */}
      <div className="featuredItem">
        <span className="featuredTitle">Dépôt</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">30 M fcfa</span>
          <span className="featuredMoneyRate">
            -1.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
      {/* Featured Item */}
      <div className="featuredItem">
        <span className="featuredTitle">Recette</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20 M fcfa</span>
          <span className="featuredMoneyRate">
            +2.5 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
    </div>
  )
}
