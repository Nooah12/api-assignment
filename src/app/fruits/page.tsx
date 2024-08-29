import FeaturedFruits from "@/components/FeaturedFruits/FeaturedFruits"
import './fruits.scss'

const fruits = () => {
  return (
    <section className="fruits-section">
      <h2 className="fruits-section-title">Choose a Devil Fruit</h2>
      <FeaturedFruits />
    </section>
  )
}

export default fruits