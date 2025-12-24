import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  "Personalized Mentorship Plans",
  "Weekly 1-on-1 Sessions",
  "Access to Exclusive Resources",
  "Performance Tracking Dashboard",
  "Community Support",
  "Career Growth Roadmap"
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SellMentors?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-sm border"
            >
              <CheckCircle className="text-primary h-6 w-6" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
