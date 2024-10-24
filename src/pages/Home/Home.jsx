import Hero from '../../components/Hero/Hero';
import NewProducts from '../../components/NewProducts/NewProducts';
import LeadersProducts from '../../components/LeadersProducts/LeadersProducts';
import CastomUi from '../../components/CastomUi/CastomUi';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <NewProducts></NewProducts>
      <LeadersProducts></LeadersProducts>
      <CastomUi></CastomUi>
    </div>
  );
};

export default Home;
