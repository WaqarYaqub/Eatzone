import { FruitsSection, MenuSection, ShowcaseBanner } from "../../components"

const Home = () => {
  return (
    <div className='pt-5 flex w-full h-auto flex-col items-center justify-center'>
      <ShowcaseBanner />
      <FruitsSection />
      <MenuSection />

    </div>

  )
}

export default Home