
const HeroSection =() =>{

    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolores magni veniam reiciendis dolorem veritatis non. Vitae aliquam quam quae ipsum reiciendis doloremque nihil corrupti commodi ab ratione provident itaque, porro deserunt laudantium dignissimos, exercitationem saepe. Aperiam distinctio, officia excepturi atque possimus libero ullam. Totam quis ipsum hic iste magnam.</p>
                <div className="hero-btn">
                    <button>Shop now</button>
                    <button>Category</button>
                </div>

                <div className="shopping">
                    <p>available only on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    )
}

export default HeroSection;