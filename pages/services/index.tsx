import Newsletter from '../../components/layout/Home/Newsletter';
import Layout from '../../components/layout/layout';
import ServiceDetails from './ServiceDetails';
import { servicesList } from './data';

export default function Index() {
  return (
    <Layout title='Services'>
      <div className='flex flex-col gap-20 pb-20'>
        {servicesList.map((service) => (
          <ServiceDetails key={service.id} service={service} />
        ))}
      </div>
      <Newsletter />
    </Layout>
  );
}
