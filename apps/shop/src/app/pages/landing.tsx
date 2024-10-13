import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts';
import { Head } from '../../components/seo';

const Landing = () => {
  return (
    <DashboardLayout>
      <Head title="Shop" description="Welcome to the abc Shop" />
      <h1>Welcome to the Shop</h1>
      <Link to="merchandise">Merchandise</Link>
      <Link to="tickets">Tickets</Link>
    </DashboardLayout>
  );
};

export default Landing;