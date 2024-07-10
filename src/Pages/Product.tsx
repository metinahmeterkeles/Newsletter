import Form from '../components/Form';
import IllustrationMobile from '../components/IllustrationMobile';
import IllusturationDesktop from '../components/IllusturationDesktop';
import ListItem from '../components/ListItem';

const Product = () => {
  return (
    <div className=" max-w-[840px] mx-5 flex-col items-center md:flex-row bg-white flex px-5 py-3 md:px-8 md:py-4 gap-10 rounded-lg ">
      <div className="order-2 md:order-1 flex flex-col gap-6">
        <p className=" text-4xl font-bold tracking-widest">Stay updated!</p>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="flex flex-col gap-4 justify-center">
          <ListItem content="Product discovery and building what matters" />
          <ListItem content="Measuring to ensure updates are a success" />
          <ListItem content="And much more!" />
        </div>
        <Form />
      </div>

      <div className="order-1 md:order-2 flex justify-center items-center">
        <IllusturationDesktop className="hidden md:block" />
        <IllustrationMobile className="block md:hidden" />
      </div>
    </div>
  );
};
export default Product;
