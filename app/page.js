import Button from './components/Button'
import Card from './components/Card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-800 mb-4">
            Artisan Bites
          </h1>
          <p className="text-xl text-orange-600 max-w-2xl mx-auto">
            Crafting extraordinary sandwiches with premium ingredients and passion since 2020
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded by chef Maria Rodriguez, Artisan Bites began as a dream to create the perfect sandwich. 
              Using locally-sourced ingredients and traditional techniques passed down through generations, 
              we transform simple bread and fillings into culinary masterpieces that tell a story with every bite.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">What Makes Us Special</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Fresh bread baked daily in our wood-fired oven</li>
              <li>• Premium meats and cheeses from local farms</li>
              <li>• House-made sauces and spreads</li>
              <li>• Sustainable packaging and practices</li>
              <li>• Customizable options for all dietary needs</li>
            </ul>
          </Card>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Featured Sandwiches</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">The Heritage</h3>
              <p className="text-gray-600 mb-4">
                Slow-roasted turkey, aged cheddar, cranberry aioli, and arugula on sourdough
              </p>
              <span className="text-lg font-bold text-orange-800">$12.99</span>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Garden Goddess</h3>
              <p className="text-gray-600 mb-4">
                Grilled vegetables, hummus, sprouts, and avocado on multigrain bread
              </p>
              <span className="text-lg font-bold text-orange-800">$10.99</span>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">The Classic Club</h3>
              <p className="text-gray-600 mb-4">
                Triple-stack with turkey, ham, bacon, lettuce, tomato, and mayo
              </p>
              <span className="text-lg font-bold text-orange-800">$14.99</span>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Visit Us Today</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <p className="text-gray-700 mb-4">
              <strong>Location:</strong> 123 Main Street, Downtown<br />
              <strong>Hours:</strong> Mon-Sat 7am-8pm, Sun 8am-6pm<br />
              <strong>Phone:</strong> (555) 123-BITE
            </p>
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                Order Online
              </Button>
              <Button variant="outline" className="w-full">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}