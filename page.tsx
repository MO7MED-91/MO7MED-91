import MeetingTypeList from '@/components/MeetingTypeList';
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('ar-SA', { dateStyle: 'full' })).format(now);
 

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[30px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[343px] lg:text-2xl rounded py-2 text-center text-base font-normal ">
         مرحبا بك في تطبيق موكا للأجتماعات
       
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl"> {date}</p>
          
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
